import { errorHandler, fetcher } from "shared/api/utils"
import config from "shared/config"
import { getAuthToken } from "shared/lib/cookies-helper"

export const updateCompanyName = async (
  company: string
): Promise<Shop | undefined> => {
  try {
    const token = getAuthToken()
    if (!token) throw new Error("Token undefined")

    return await fetcher<Shop>(`${config.API_URL}/store/company`, {
      method: "POST",
      body: JSON.stringify({
        company,
      }),
      headers: {
        "Content-Type": "application/json",
        Cookie: token,
      },
    })
  } catch (error) {
    return errorHandler(error)
  }
}

export const getShop = async (): Promise<Shop | undefined> => {
  const accessToken = getAuthToken()

  const { data } = await fetcher<ResponseData<Shop>>(`${config.API_URL}/shop`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  })
  return data
}
