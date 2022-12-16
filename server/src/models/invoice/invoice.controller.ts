import { Controller, Get, UseInterceptors } from "@nestjs/common"
import { UseGuards } from "@nestjs/common/decorators"
import { ApiTags } from "@nestjs/swagger"
import { JwtAuthGuard } from "src/auth/jwt-auth.guard"
import { AuthUserType } from "src/common/interfaces"
import { ResponseInterceptor } from "src/common/response.interceptor"
import { AuthUser } from "src/common/user.decorator"
import { Invoice } from "./entities/invoice.entity"
import { InvoiceService } from "./invoice.service"

@ApiTags("invoice")
@UseInterceptors(ResponseInterceptor)
@Controller({
  version: "1",
  path: "invoice"
})
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

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
}
