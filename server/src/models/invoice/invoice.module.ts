import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { InvoicePayments } from "./entities/invoice-payment.entity"
import { InvoiceProducts } from "./entities/invoice-products.entity"
import { Invoice } from "./entities/invoice.entity"

import { InvoiceController } from "./invoice.controller"
import { InvoiceService } from "./invoice.service"

@Module({
  imports: [
    TypeOrmModule.forFeature([Invoice, InvoicePayments, InvoiceProducts])
  ],
  controllers: [InvoiceController],
  providers: [InvoiceService],
  exports: [TypeOrmModule]
})
export class InvoiceModule {}
