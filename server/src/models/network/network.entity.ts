import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm"

@Entity({ name: "networks" })
export class Network {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  ticker: string

  @Column()
  name: string

  @Column()
  chain_id: string

  @Column()
  img_url: string

  @CreateDateColumn()
  @Column()
  created_at: Date

  @UpdateDateColumn()
  @Column()
  updated_at: Date
}
