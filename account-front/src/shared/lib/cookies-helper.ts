import Cookie from "js-cookie"

export function setAuthToken(token: string): void {
  Cookie.set("authToken", token, {
    expires: 3,
  })
}

export function delAuthToken(): void {
  Cookie.remove("authToken")
}

export function getAuthToken(): string {
  return Cookie.get("authToken") || ""
}
