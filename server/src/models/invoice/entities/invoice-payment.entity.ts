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

@Entity({ name: "invoices_payments" })
export class InvoicePayments {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  invoice_id: number

  @OneToOne(() => Invoice)
  @JoinColumn({ name: "invoice_id" })
  invoice: Invoice

  // @Column()
  // payment_id: string

  // @OneToOne(() => Payment)
  // @JoinColumn({ name: "payment_id" })
  // payment: Payment

  @CreateDateColumn()
  @Column()
  created_at: Date

  @UpdateDateColumn()
  @Column()
  updated_at: Date
}
