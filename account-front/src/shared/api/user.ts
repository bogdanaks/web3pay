import { fetcher } from "shared/api/utils"
import config from "shared/config"
import { getAuthToken } from "shared/lib/cookies-helper"

export const getUser = async (): Promise<User | undefined> => {
  const accessToken = getAuthToken()

  const { data } = await fetcher<ResponseData<User>>(`${config.API_URL}/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  })
  return data
}
