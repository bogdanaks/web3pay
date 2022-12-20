import {
  Controller,
  Get,
  UseInterceptors,
  ValidationPipe
} from "@nestjs/common"
import { Body, Post, UseGuards } from "@nestjs/common/decorators"
import { BadRequestException } from "@nestjs/common/exceptions"
import { ApiTags } from "@nestjs/swagger"

import { JwtAuthGuard } from "src/auth/jwt-auth.guard"
import { AuthUserType } from "src/common/interfaces"
import { ResponseInterceptor } from "src/common/response.interceptor"
import { AuthUser } from "src/common/user.decorator"
import { CurrencyService } from "../currency/currency.service"
import { CreateInvoice } from "./dto/create-invocie.dto"

import { Invoice } from "./entities/invoice.entity"
import { InvoiceService } from "./invoice.service"

@ApiTags("invoice")
@UseInterceptors(ResponseInterceptor)
@Controller({
  version: "1",
  path: "invoice"
})
export class InvoiceController {
  constructor(
    private readonly invoiceService: InvoiceService,
    private readonly currencyService: CurrencyService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@AuthUser() user: AuthUserType): Promise<void> {
    console.log("req", user)
    return
    // return this.invoiceService.getInvoices()
  }

  @Get(":id")
  findOne(): Promise<Invoice> {
    return this.invoiceService.getById(1)
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createInvoice(
    @AuthUser() user: AuthUserType,
    @Body(
      new ValidationPipe({
        skipUndefinedProperties: true,
        skipMissingProperties: true,
        skipNullProperties: true
      })
    )
    data: CreateInvoice
  ): Promise<Invoice> {
    console.log(data)
    if (data.currencies_ids) {
      const currencies = await this.currencyService.getAllByIds(
        data.currencies_ids
      )

      const isNotIncluded = data.currencies_ids
        .map((value) => {
          if (!currencies.find((cur) => String(cur.id) === value)) return value
        })
        .filter(Boolean)

      if (isNotIncluded) {
        throw new BadRequestException(
          `Currencies ${isNotIncluded.join(", ")} is not founds`
        )
      }

      // return this.invoiceService.createInvoiceWithCurrencies({
      //   ...data,
      //   shop_id: user.shop_id
      // })
    }

    return
    // return this.invoiceService.createInvoice({ ...data, shop_id: user.shop_id })
  }
}
