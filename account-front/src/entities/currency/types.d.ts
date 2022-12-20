interface Currency {
  id: string
  ticker: string
  name: string
  address: string
  img_url: string
  priority: number
  created_at: Date
  updated_at: Date
}

// TODO maybe deprecated
interface CurrenciesSettings {
  [network_slug: string]:
    | SwitchType
    | {
        currencies_enabled_ids?: string[]
        currencies_disabled_ids: string[]
        currencies_favorite_ids: string[]
      }
}
