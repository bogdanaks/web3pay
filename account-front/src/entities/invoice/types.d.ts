interface Invoice {
  id: string
  shop_id: string
  order_id: string
  order_description: string
  price_from: string | null
  price_to: string
  base_currency: string
  type: InvoiceTypes
  created_at: Date
  updated_at: Date
}

// TODO maybe deprecated
interface InvoiceWithCurrenciesSettings extends Invoice {
  currencies_settings: CurrenciesSettings
}
