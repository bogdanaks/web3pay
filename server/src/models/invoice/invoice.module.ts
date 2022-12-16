import { Module } from "@nestjs/common"
import { DatabaseModule } from "src/providers/database/database.module"
import { InvoiceController } from "./invoice.controller"
import { invoiceProvider } from "./invoice.provider"
import { InvoiceService } from "./invoice.service"

@Module({
  imports: [DatabaseModule],
  controllers: [InvoiceController],
  providers: [InvoiceService, invoiceProvider]
})
export class InvoiceModule {}
