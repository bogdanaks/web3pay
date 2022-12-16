import { Controller, Get, UseInterceptors } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { ResponseInterceptor } from "src/common/response.interceptor"
import { Currency } from "./currency.entity"
import { CurrencyService } from "./currency.service"

@ApiTags("currency")
@UseInterceptors(ResponseInterceptor)
@Controller({
  version: "1",
  path: "currency"
})
export class CurrencyController {
  constructor(private readonly userService: CurrencyService) {}

  @Get()
  getUser(): Promise<Currency> {
    return this.userService.getById(1)
  }
}
