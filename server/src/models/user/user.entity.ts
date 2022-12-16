import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm"

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    default: true
  })
  is_active: boolean

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  address: string

  @Column({
    default: false
  })
  is_email_active: boolean

  @Column()
  activated_at: Date

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
