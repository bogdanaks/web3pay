import { Inject, Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { Invoice } from "./entities/invoice.entity"

@Injectable()
export class InvoiceService {
  constructor(
    @Inject("INVOICE_REPOSITORY")
    private invoiceRepository: Repository<Invoice>
  ) {}

  async getInvoices(shop_id: string): Promise<Invoice[]> {
    return await this.invoiceRepository.find({ where: { shop_id } })
  }

  getById(id: number): Promise<Invoice> {
    try {
      return this.invoiceRepository.findOneBy({ id })
    } catch (err) {
      // return responseError(ctx, errorBuilder.buildNotFoundError())
    }
  }
}
