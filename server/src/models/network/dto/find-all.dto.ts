import { ApiProperty } from "@nestjs/swagger"
import { Transform } from "class-transformer"
import { IsBoolean, IsOptional, IsNotEmpty } from "class-validator"

export class FindAllNetworks {
  @IsOptional()
  @IsBoolean()
  @ApiProperty({ required: false })
  @Transform(({ value }) => value === "true" || value === true)
  with_currencies?: boolean
}
