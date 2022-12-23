interface Network {
  id: string
  ticker: string
  name: string
  chain_id: string
  img_url: string
  created_at: Date
  updated_at: Date
}

interface NetworkWithCurrencies extends Network {
  currencies: Currency[]
}
