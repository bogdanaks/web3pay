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
  id: number

  @Column()
  invoice_id: number

  @OneToOne(() => Invoice)
  @JoinColumn({ name: "invoice_id" })
  invoice: Invoice

  @Column()
  currency_id: number

  @OneToOne(() => Invoice)
  @JoinColumn({ name: "currency_id" })
  currency: Invoice

  @CreateDateColumn()
  @Column()
  created_at: Date

  @UpdateDateColumn()
  @Column()
  updated_at: Date
}
