import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm"
import { Invoice } from "./invoice.entity"

export enum SwitchType {
  enabled = "enabled",
  disabled = "disabled"
}

@Entity({ name: "invoices_currencies" })
export class InvoicesCurrencies {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  invoice_id: string

  @OneToOne(() => Invoice)
  @JoinColumn({ name: "invoice_id" })
  invoice: Invoice

  // @Column()
  // currencies_settings: CurrenciesSettings

  @CreateDateColumn()
  @Column()
  created_at: Date

  @UpdateDateColumn()
  @Column()
  updated_at: Date
}
