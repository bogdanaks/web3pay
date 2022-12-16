import config from "shared/config"
import { getAuthToken } from "shared/lib/cookies-helper"
import { fetcher } from "./utils"

export const getInvoices = async (): Promise<Invoice[] | undefined> => {
  const accessToken = getAuthToken()

  const { data } = await fetcher<ResponseData<Invoice[]>>(
    `${config.API_URL}/invoice`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )
  return data
}

// export const getInvoiceById = async (id: string): Promise<AxiosResponse<InvoiceWithCurrenciesSettings>> => {
export const getInvoiceById = async (id: string): Promise<any> => {
  // const token = getAuthToken()
  // const { data } = await api.get(`/invoices/${id}`, {
  //   headers: {
  //     Authorization: 'Bearer ' + token,
  //   },
  // })
  // return data
}

// export const addInvoice = async (someData: object): Promise<AxiosResponse> => {
export const addInvoice = async (someData: object): Promise<any> => {
  // const token = getAuthToken()
  // const { data } = await api.post('/invoices', someData, {
  //   headers: {
  //     Authorization: 'Bearer ' + token,
  //   }
  // })
  // return data
}
