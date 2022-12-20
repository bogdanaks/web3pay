import config from "shared/config"
import { fetcher } from "./utils"

export const getNetworks = async (): Promise<Network[] | undefined> => {
  const { data } = await fetcher<ResponseData<Network[]>>(
    `${config.API_URL}/network`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  return data
}

export const getNetworksWithCurrencies = async (): Promise<
  NetworkWithCurrencies[] | undefined
> => {
  const { data } = await fetcher<ResponseData<NetworkWithCurrencies[]>>(
    `${config.API_URL}/network?with_currencies=true`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  return data
}
