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
import { Network } from "../network/network.entity"
import { Shop } from "../shop/shop.entity"

@Entity({ name: "payout_wallets" })
export class PayoutWallet {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  shop_id: string

  @OneToOne(() => Shop)
  @JoinColumn({ name: "shop_id" })
  shop: Shop

  @Column()
  network_id: string

  @OneToOne(() => Network)
  @JoinColumn({ name: "network_id" })
  network: Network

  @Column()
  currency_id: string

  @OneToOne(() => Currency)
  @JoinColumn({ name: "currency_id" })
  currency: Currency

  @Column()
  address: string

  @Column()
  extra_id: string

  @CreateDateColumn()
  @Column()
  created_at: Date

  @UpdateDateColumn()
  @Column()
  updated_at: Date
}
