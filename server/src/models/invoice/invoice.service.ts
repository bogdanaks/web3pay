import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { Invoice } from "./entities/invoice.entity"

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private invoiceRepository: Repository<Invoice>
  ) {}

  async getInvoices(shop_id: string): Promise<Invoice[]> {
    return await this.invoiceRepository.find({ where: { shop_id } })
  }

  async getById(id: number): Promise<Invoice> {
    return await this.invoiceRepository.findOneBy({ id })
  }

  async saveInvoice(invoice: Invoice): Promise<Invoice> {
    return await this.invoiceRepository.save(invoice)
  }
}
