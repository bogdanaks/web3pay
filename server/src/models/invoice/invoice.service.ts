import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { Currency } from "../currency/currency.entity"
import { Invoice, InvoiceTypes } from "./entities/invoice.entity"

interface CreateInvoiceProps {
  order_id?: string
  order_description?: string
  price_from?: string
  currencies_ids?: string[] | number[]
  price_to: string
  type: InvoiceTypes
  base_currency: string
  shop_id: number
}

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private invoiceRepository: Repository<Invoice>
  ) {}

  async getInvoices(shop_id: number): Promise<Invoice[]> {
    return await this.invoiceRepository.find({ where: { shop_id } })
  }

  async getById(id: number): Promise<Invoice> {
    return await this.invoiceRepository.findOneBy({ id })
  }

  async saveInvoice(invoice: Invoice): Promise<Invoice> {
    return await this.invoiceRepository.save(invoice)
  }

  async createInvoice(data: CreateInvoiceProps): Promise<Invoice> {
    return await this.invoiceRepository.save(data)
  }

  async createInvoiceWithCurrencies(
    data: CreateInvoiceProps
  ): Promise<Invoice> {
    return await this.invoiceRepository.save(data)
  }
}
