import { Shop } from "src/models/shop/shop.entity"
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm"

export enum InvoiceTypes {
  invoice = "invoice",
  draft = "draft"
}

@Entity({ name: "invoices" })
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  shop_id: string

  @OneToOne(() => Shop)
  @JoinColumn({ name: "shop_id" })
  shop: Shop

  @Column()
  order_id: string

  @Column()
  price_from: string

  @Column()
  price_to: string

  @Column()
  order_description: string

  @Column()
  type: InvoiceTypes

  @Column()
  base_currency: string

  @CreateDateColumn()
  @Column()
  created_at: Date

  @UpdateDateColumn()
  @Column()
  updated_at: Date
}
