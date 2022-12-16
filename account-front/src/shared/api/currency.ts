import config from "shared/config"
import { getAuthToken } from "shared/lib/cookies-helper"
import { fetcher } from "./utils"

export const getCurrenciesByNetwork = async (
  network_id: string,
  page: number
): Promise<Currency[] | undefined> => {
  const accessToken = getAuthToken()

  const { data } = await fetcher<ResponseData<Currency[]>>(
    `${config.API_URL}/currencies`,
    {
      method: "GET",
      // params: {
      //   network_id,
      //   page,
      // },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )
  return data
}
