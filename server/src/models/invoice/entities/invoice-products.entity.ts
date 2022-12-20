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

@Entity({ name: "invoices_products" })
export class InvoiceProducts {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  invoice_id: string

  @OneToOne(() => Invoice)
  @JoinColumn({ name: "invoice_id" })
  invoice: Invoice

  @Column()
  title: string

  @Column()
  qty: number

  @Column()
  price: string

  @CreateDateColumn()
  @Column()
  created_at: Date

  @UpdateDateColumn()
  @Column()
  updated_at: Date
}
