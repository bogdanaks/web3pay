import {
  Body,
  Controller,
  Post,
  UseInterceptors,
  ValidationPipe
} from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { ResponseInterceptor } from "src/common/response.interceptor"
import { AuthService } from "./auth.service"
import { SignUpEmail, SignWeb3 } from "./dto/auth.dto"

@ApiTags("auth")
@UseInterceptors(ResponseInterceptor)
@Controller({
  version: "1",
  path: "auth"
})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/sign-up/email")
  signUpEmail(
    @Body(new ValidationPipe()) data: SignUpEmail
  ): Promise<{ access_token: string }> {
    return this.authService.signUpEmail({
      email: data.email,
      password: data.password
    })
  }

  @Post("/sign-up/web3")
  signUpWeb3(
    @Body(new ValidationPipe()) data: SignWeb3
  ): Promise<{ access_token: string }> {
    return this.authService.signUpWeb3({
      address: data.address,
      signature: data.signature,
      nonce: data.nonce
    })
  }

  @Post("/sign-in/email")
  signInEmail(
    @Body(new ValidationPipe()) data: SignUpEmail
  ): Promise<{ access_token: string }> {
    return this.authService.signInEmail({
      email: data.email,
      password: data.password
    })
  }

  @Post("/sign-in/web3")
  signInWeb3(
    @Body(new ValidationPipe()) data: SignWeb3
  ): Promise<{ access_token: string }> {
    return this.authService.signInWeb3({
      address: data.address,
      signature: data.signature,
      nonce: data.nonce
    })
  }
}
