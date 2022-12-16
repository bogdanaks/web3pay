import { DataSource } from "typeorm"
import { Invoice } from "./entities/invoice.entity"

export const invoiceProvider = {
  provide: "INVOICE_REPOSITORY",
  useFactory: (dataSource: DataSource) => dataSource.getRepository(Invoice),
  inject: ["DATA_SOURCE"]
}
