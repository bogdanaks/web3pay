import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm"
import { Network } from "../network/network.entity"

@Entity({ name: "currencies" })
export class Currency {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  network_id: number

  @OneToOne(() => Network)
  @JoinColumn({ name: "network_id" })
  network: Network

  @Column()
  ticker: string

  @Column()
  name: string

  @Column()
  address: string

  @Column()
  priority: number

  @Column()
  decimals: number

  @Column()
  img_url: string

  @CreateDateColumn()
  @Column()
  created_at: Date

  @UpdateDateColumn()
  @Column()
  updated_at: Date
}
