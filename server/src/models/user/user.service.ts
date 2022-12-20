import { BadRequestException, Injectable } from "@nestjs/common"
import { FindOptionsWhere, Repository } from "typeorm"
import { User } from "./user.entity"
import * as bcrypt from "bcrypt"
import { ConfigService } from "@nestjs/config"
import { InjectRepository } from "@nestjs/typeorm"

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private configService: ConfigService
  ) {}

  async findBy(where: FindOptionsWhere<User>): Promise<User> {
    return await this.userRepository.findOneBy(where)
  }

  async createUserByEmail({
    email,
    password
  }: {
    email: string
    password: string
  }): Promise<User> {
    const hashPass = await bcrypt.hash(
      password,
      Number(this.configService.get("SALT_ROUNDS"))
    )

    return await this.userRepository.create({ password: hashPass, email })
  }

  async createUserByAddress({ address }: { address: string }): Promise<User> {
    return await this.userRepository.create({ address })
  }

  async saveUser(user: User): Promise<User> {
    return await this.userRepository.save(user)
  }
}
