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

@Entity({ name: "api_keys" })
export class ApiKey {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  user_id: string

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User

  @Column({
    default: true
  })
  is_active: boolean

  @Column()
  api_key: string

  @CreateDateColumn()
  @Column()
  created_at: Date

  @UpdateDateColumn()
  @Column()
  updated_at: Date
}
