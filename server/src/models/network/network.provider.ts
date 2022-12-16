import { DataSource } from "typeorm"
import { Network } from "./network.entity"

export const networkProvider = {
  provide: "NETWORK_REPOSITORY",
  useFactory: (dataSource: DataSource) => dataSource.getRepository(Network),
  inject: ["DATA_SOURCE"]
}
