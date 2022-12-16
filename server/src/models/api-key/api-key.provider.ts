import { DataSource } from "typeorm"
import { ApiKey } from "./api-key.entity"

export const apiKeyProvider = {
  provide: "API_KEY_REPOSITORY",
  useFactory: (dataSource: DataSource) => dataSource.getRepository(ApiKey),
  inject: ["DATA_SOURCE"]
}
