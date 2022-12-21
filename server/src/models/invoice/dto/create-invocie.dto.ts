import { ApiProperty } from "@nestjs/swagger"
import { Transform } from "class-transformer"
import { IsArray, IsEnum, IsOptional, IsString } from "class-validator"
import { IsBiggerThan } from "src/common/validators/is-bigger-than"
import { InvoiceTypes } from "../entities/invoice.entity"

export class CreateInvoice {
  @IsOptional()
  @IsString()
  @ApiProperty()
  order_id?: string

  @IsOptional()
  @IsString()
  @ApiProperty()
  order_description?: string

  @IsOptional()
  @IsString()
  @ApiProperty()
  price_from?: string

  @IsOptional()
  @IsArray()
  @ApiProperty({ isArray: true })
  @Transform(({ value }) => {
    if (!value) return
    const unique = [...new Set(value)]
    return unique.map((val) => String(val))
  })
  currencies_ids?: string[]

  @IsString()
  @IsBiggerThan("price_from", {
    message: "price_to must be larger than price_from"
  })
  @ApiProperty()
  price_to: string

  @IsEnum(InvoiceTypes, {
    message: "type must be DRAFT or INVOICE"
  })
  @ApiProperty()
  @Transform(({ value }: { value: InvoiceTypes }) => value.toLowerCase())
  type: InvoiceTypes

  @IsString()
  @ApiProperty()
  base_currency: string
}
