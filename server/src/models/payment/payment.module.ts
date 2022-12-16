import { Module } from "@nestjs/common"
import { DatabaseModule } from "src/providers/database/database.module"
import { PaymentController } from "./payment.controller"
import { paymentProvider } from "./payment.provider"
import { PaymentService } from "./payment.service"

@Module({
  imports: [DatabaseModule],
  controllers: [PaymentController],
  providers: [PaymentService, paymentProvider]
})
export class PaymentModule {}
