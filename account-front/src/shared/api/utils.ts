export interface ResponseError {
  error: string
  message: string | string[]
  statusCode: number
}

export const fetcher = async <T>(input: RequestInfo, init?: RequestInit) => {
  const response = await fetch(input, init)

  if (!response.ok) {
    throw response
  }

  return response.json() as Promise<T>
}

export const errorHandler = async (error: unknown) => {
  if (error instanceof Response) {
    const msg: ResponseError = JSON.parse(await error.text())
    const msgFormatting = Array.isArray(msg.message)
      ? msg.message.join(", ")
      : msg.message

    throw new Error(msgFormatting)
  }
  throw new Error(`Something went wrong: ${error}`)
}
