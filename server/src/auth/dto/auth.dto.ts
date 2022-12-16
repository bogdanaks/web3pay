import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsEmail } from "class-validator"

export class SignUpEmail {
  @IsString()
  @IsEmail()
  @ApiProperty()
  email: string

  @IsString()
  @ApiProperty()
  password: string
}

export class SignWeb3 {
  @IsString()
  @ApiProperty()
  address: string

  @IsString()
  @ApiProperty()
  signature: string

  @IsString()
  @ApiProperty()
  nonce: string
}
