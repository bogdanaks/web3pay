import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm"
import { Currency } from "../currency/currency.entity"

export enum PaymentStatus {
  finished = "finished",
  pending = "pending",
  canceled = "canceled"
}

@Entity({ name: "payments" })
export class Payment {
  @PrimaryGeneratedColumn()
  id: number

  // @BelongsTo(() => Stores)
  // store: Stores

  // @ForeignKey(() => Stores)
  // @Index
  // @Column()
  // shop_id: string

  @Column()
  status: PaymentStatus

  @Column()
  order_id: string

  @Column()
  order_notes: string

  @Column()
  price_amount: string

  @Column()
  price_currency_id: string

  @OneToOne(() => Currency)
  @JoinColumn({ name: "price_currency_id" })
  price_currency: Currency

  @Column()
  pay_amount: string

  @Column()
  pay_currency_id: string

  @OneToOne(() => Currency)
  @JoinColumn({ name: "pay_currency_id" })
  pay_currency: Currency

  @Column()
  ipn_callback_url: string

  @CreateDateColumn()
  @Column()
  created_at: Date

  @UpdateDateColumn()
  @Column()
  updated_at: Date
}
