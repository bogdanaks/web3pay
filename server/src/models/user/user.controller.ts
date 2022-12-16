import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseGuards,
  UseInterceptors
} from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { JwtAuthGuard } from "src/auth/jwt-auth.guard"
import { AuthUserType } from "src/common/interfaces"
import { ResponseInterceptor } from "src/common/response.interceptor"
import { UserEntity } from "./dto/user.dto"
import { AuthUser } from "src/common/user.decorator"
import { UserService } from "./user.service"

@ApiTags("user")
@UseInterceptors(ResponseInterceptor)
@Controller({
  version: "1",
  path: "user"
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(JwtAuthGuard)
  @Get()
  async getUser(@AuthUser() user: AuthUserType): Promise<UserEntity> {
    const data = await this.userService.findBy({ id: user.id })
    return new UserEntity(data)
  }
}
