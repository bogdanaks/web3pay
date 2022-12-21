import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { DataSource, Repository } from "typeorm"
import { Currency } from "../currency/currency.entity"
import { Invoice, InvoiceTypes } from "./entities/invoice.entity"
import { InvoicesCurrencies } from "./entities/invoices-currencies.entity"

interface CreateInvoiceProps {
  order_id?: string
  order_description?: string
  price_from?: string
  currencies_ids?: string[]
  price_to: string
  type: InvoiceTypes
  base_currency: string
  shop_id: number
}

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private invoiceRepository: Repository<Invoice>,
    @InjectRepository(InvoicesCurrencies)
    private invoiceCurrenciesRepository: Repository<InvoicesCurrencies>,
    private dataSource: DataSource
  ) {}

  async getInvoices(shop_id: number): Promise<Invoice[]> {
    return await this.invoiceRepository.find({ where: { shop_id } })
  }

  async getById(id: number): Promise<Invoice> {
    return await this.invoiceRepository.findOneBy({ id })
  }
  async saveInvoice(data: CreateInvoiceProps): Promise<Invoice> {
    return await this.invoiceRepository.save(data)
  }

  async createInvoice(data: CreateInvoiceProps): Promise<Invoice> {
    return await this.invoiceRepository.create(data)
  }

  async createInvoiceCurrencies({
    ids,
    invoice_id
  }: {
    ids: string[]
    invoice_id: number
  }): Promise<InvoicesCurrencies[]> {
    return ids.map((id) => {
      return this.invoiceCurrenciesRepository.create({
        currency_id: Number(id),
        invoice_id
      })
    })
  }

  async createInvoiceWithCurrencies(
    data: CreateInvoiceProps
  ): Promise<Invoice> {
    const newInvoice = await this.createInvoice(data)

    return await this.dataSource.transaction(async (manager) => {
      const txInvoice = await manager.save(newInvoice)

      const newInvoiceCurrencies = await this.createInvoiceCurrencies({
        ids: data.currencies_ids,
        invoice_id: txInvoice.id
      })

      const invoiceCurrencies = await manager.save(newInvoiceCurrencies)
      await manager.save(invoiceCurrencies)
      return {
        ...txInvoice,
        currencies_ids: data.currencies_ids
      }
    })
  }
}
