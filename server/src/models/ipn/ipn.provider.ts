import { DataSource } from "typeorm"
import { IpnKey } from "./ipn-key.entity"

export const ipnProvider = {
  provide: "IPN_KEY_REPOSITORY",
  useFactory: (dataSource: DataSource) => dataSource.getRepository(IpnKey),
  inject: ["DATA_SOURCE"]
}
