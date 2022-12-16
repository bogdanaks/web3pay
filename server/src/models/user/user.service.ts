import { BadRequestException, Inject, Injectable } from "@nestjs/common"
import { FindOptionsWhere, Repository } from "typeorm"
import { User } from "./user.entity"
import * as bcrypt from "bcrypt"
import { ConfigService } from "@nestjs/config"

@Injectable()
export class UserService {
  constructor(
    @Inject("USER_REPOSITORY")
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
    try {
      const hashPass = await bcrypt.hash(
        password,
        Number(this.configService.get("SALT_ROUNDS"))
      )

      return await this.userRepository.save({ password: hashPass, email })
    } catch (error) {
      throw new BadRequestException("Internal server error")
    }
  }

  async createUserByAddress({ address }: { address: string }): Promise<User> {
    try {
      return await this.userRepository.save({ address })
    } catch (error) {
      throw new BadRequestException("Internal server error")
    }
  }
}
