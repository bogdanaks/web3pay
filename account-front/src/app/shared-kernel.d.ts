interface RpcError extends Error {
  code: number
  message: string
}

interface Currency {
  id: string
  ticker: string
  name: string
  address: string
  img_url: string
  priority: number
}

interface CurrencyExtend extends Currency {
  is_selected: boolean
  is_favorite: boolean
}

type ResponseData<T> = {
  statusCode: number
  message?: string
  data?: T
}
type AuthToken = string
type AuthType = "wallet" | "email"

type User = {
  id: string
  is_active: boolean
  email: string
  password: string
  address: string
  is_email_active: boolean
  activated_at: Date
  created_at: Date
  updated_at: Date
}

type Shop = {
  id: string
  user_id: number
  user: User
  company: string
  created_at: Date
  updated_at: Date
}

interface Invoice {
  id: string
  shop_id: string
  order_id: string
  order_description: string
  price_from: string | null
  price_to: string
  base_currency: string
  type: InvoiceTypes
  created_at: string
  updated_at: string
}

interface CurrenciesSettings {
  [network_slug: string]:
    | SwitchType
    | {
        currencies_enabled_ids?: string[]
        currencies_disabled_ids: string[]
        currencies_favorite_ids: string[]
      }
}

interface InvoiceWithCurrenciesSettings extends Invoice {
  currencies_settings: CurrenciesSettings
}
