import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsOptional, IsNotEmpty } from "class-validator"

export class FindAllNetworks {
  @IsOptional()
  @IsString()
  @ApiProperty()
  with_currencies: string
}
