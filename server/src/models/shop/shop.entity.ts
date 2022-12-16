import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm"
import { User } from "../user/user.entity"

@Entity({ name: "shops" })
export class Shop {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  user_id: number

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User

  @Column()
  company: string

  @CreateDateColumn()
  @Column()
  created_at: Date

  @UpdateDateColumn()
  @Column()
  updated_at: Date
}
