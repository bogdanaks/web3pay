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
    private userService: UserService,
    private shopService: ShopService,
    private jwtService: JwtService
  ) {}

  async signUpEmail({ email, password }: SignEmailProps) {
    let newUser
    let newShop

    await Promise.all([
      (newUser = await this.userService.createUserByEmail({ email, password })),
      (newShop = await this.shopService.createShop({ user_id: newUser.id }))
    ])

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
    let newUser
    let newShop

    await Promise.all([
      (newUser = await this.userService.createUserByAddress({ address })),
      (newShop = await this.shopService.createShop({ user_id: newUser.id }))
    ])

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
