interface RpcError extends Error {
  code: number
  message: string
}

type ResponseData<T> = {
  statusCode: number
  message?: string
  data?: T
}
type AuthToken = string
type AuthType = "wallet" | "email"

type WalletProvider = "metamask" | "walletconnect"

type ElementState = "normal" | "processing" | "success" | "failure" | "disabled"

type SwitchType = "enabled" | "disabled"
