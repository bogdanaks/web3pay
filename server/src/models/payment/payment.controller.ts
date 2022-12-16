import { Controller, Get, UseInterceptors } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { ResponseInterceptor } from "src/common/response.interceptor"
import { Payment } from "./payment.entity"
import { PaymentService } from "./payment.service"

@ApiTags("payment")
@UseInterceptors(ResponseInterceptor)
@Controller({
  version: "1",
  path: "payment"
})
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get()
  geById(): Promise<Payment> {
    return this.paymentService.getById(1)
  }
}
