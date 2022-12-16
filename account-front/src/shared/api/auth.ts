import { errorHandler, fetcher } from "shared/api/utils"
import config from "shared/config"

export const signUpByEmail = async ({
  email,
  password,
}: {
  email: string
  password: string
}): Promise<string | undefined> => {
  try {
    const { data } = await fetcher<ResponseData<{ access_token: string }>>(
      `${config.API_URL}/auth/sign-up/email`,
      {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    return data?.access_token
  } catch (error) {
    return errorHandler(error)
  }
}

export const signUpByWeb3 = async ({
  address,
  signature,
  nonce,
}: {
  address: string
  signature: string
  nonce: string
}): Promise<string | undefined> => {
  try {
    const { data } = await fetcher<ResponseData<{ access_token: string }>>(
      `${config.API_URL}/auth/sign-up/web3`,
      {
        method: "POST",
        body: JSON.stringify({
          address,
          signature,
          nonce,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    return data?.access_token
  } catch (error) {
    return errorHandler(error)
  }
}

export const signInByWeb3 = async ({
  address,
  signature,
  nonce,
}: {
  address: string
  signature: string
  nonce: string
}): Promise<string | undefined> => {
  try {
    const { data } = await fetcher<ResponseData<{ access_token: string }>>(
      `${config.API_URL}/auth/sign-in/web3`,
      {
        method: "POST",
        body: JSON.stringify({
          address,
          signature,
          nonce,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    return data?.access_token
  } catch (error) {
    return errorHandler(error)
  }
}

export const signInByEmail = async ({
  email,
  password,
}: {
  email: string
  password: string
}): Promise<string | undefined> => {
  try {
    const { data } = await fetcher<ResponseData<{ access_token: string }>>(
      `${config.API_URL}/auth/sign-in/email`,
      {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    return data?.access_token
  } catch (error) {
    return errorHandler(error)
  }
}
