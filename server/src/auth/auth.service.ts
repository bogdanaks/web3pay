import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  Logger
} from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { ShopService } from "src/models/shop/shop.service"
import { UserService } from "src/models/user/user.service"
import * as bcrypt from "bcrypt"
import { utils } from "ethers"
import { DataSource } from "typeorm"
import { Shop } from "src/models/shop/shop.entity"

interface SignWeb3Props {
  address: string
  signature: string
  nonce: string
}

interface SignEmailProps {
  email: string
  password: string
}

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name)

  constructor(
    private dataSource: DataSource,
    private userService: UserService,
    private shopService: ShopService,
    private jwtService: JwtService
  ) {}

  async signUpEmail({ email, password }: SignEmailProps) {
    const newUser = await this.userService.createUserByEmail({
      email,
      password
    })
    let newShop: Shop

    await this.dataSource.transaction(async (manager) => {
      const txNewUser = await manager.save(newUser)
      newShop = await this.shopService.createShop({
        user_id: txNewUser.id
      })
      await manager.save(newShop)
    })

    return {
      access_token: this.jwtService.sign(
        {
          id: newUser.id,
          shop_id: newShop.id
        },
        {
          expiresIn: "3d"
        }
      )
    }
  }

  async signUpWeb3({ address, signature, nonce }: SignWeb3Props) {
    const verifySign = utils.verifyMessage(
      `Authorization WEB3PAY ${nonce}`,
      signature
    )
    if (address !== verifySign) throw new ForbiddenException()
    const newUser = await this.userService.createUserByAddress({ address })
    let newShop: Shop

    await this.dataSource.transaction(async (manager) => {
      const txNewUser = await manager.save(newUser)
      newShop = await this.shopService.createShop({
        user_id: txNewUser.id
      })
      await manager.save(newShop)
    })

    return {
      access_token: this.jwtService.sign(
        {
          id: newUser.id,
          shop_id: newShop.id
        },
        {
          expiresIn: "3d"
        }
      )
    }
  }

  async signInEmail({ email, password }: SignEmailProps) {
    const findUser = await this.userService.findBy({ email })
    if (!findUser) {
      this.logger.log(`User ${email} not found`)
      throw new BadRequestException()
    }

    if (!findUser.is_active) {
      this.logger.log(`User ${email} isnt active`)
      throw new BadRequestException()
    }

    const resultPassword = await bcrypt.compare(password, findUser.password)
    if (!resultPassword) {
      this.logger.log(`User ${email} entered the wrong password`)
      throw new BadRequestException()
    }

    const store = await this.shopService.findBy({ user_id: findUser.id })

    return {
      access_token: this.jwtService.sign(
        {
          id: findUser.id,
          shop_id: store.id
        },
        {
          expiresIn: "3d"
        }
      )
    }
  }

  async signInWeb3({ address, signature, nonce }: SignWeb3Props) {
    const verifySign = utils.verifyMessage(
      `Authorization WEB3PAY ${nonce}`,
      signature
    )

    if (address !== verifySign) {
      this.logger.log(`Address ${address} has wrong verifySign`)
      throw new BadRequestException()
    }
    const findUser = await this.userService.findBy({ address })
    if (!findUser) {
      this.logger.log(`Address ${address} not found`)
      throw new BadRequestException()
    }
    if (!findUser.is_active) {
      this.logger.log(`Address ${address} isnt active`)
      throw new BadRequestException()
    }
    const store = await this.shopService.findBy({ user_id: findUser.id })

    return {
      access_token: this.jwtService.sign(
        {
          id: findUser.id,
          shop_id: store.id
        },
        {
          expiresIn: "3d"
        }
      )
    }
  }
}
