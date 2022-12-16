import { Exclude } from "class-transformer"

export class UserEntity {
  id: number

  @Exclude()
  is_active: boolean
  email: string

  @Exclude()
  password: string

  address: string | null

  @Exclude()
  is_email_active: boolean
  activated_at: Date
  created_at: Date
  updated_at: Date

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial)
  }
}
