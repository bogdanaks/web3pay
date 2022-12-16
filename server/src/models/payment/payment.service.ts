import { Inject, Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { Payment } from "./payment.entity"

@Injectable()
export class PaymentService {
  constructor(
    @Inject("PAYMENT_REPOSITORY")
    private paymentRepository: Repository<Payment>
  ) {}

  getById(id: number): Promise<Payment> {
    try {
      return this.paymentRepository.findOneBy({ id })
    } catch (err) {
      // return responseError(ctx, errorBuilder.buildNotFoundError())
    }
  }
}
