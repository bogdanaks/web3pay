import { DataSource } from "typeorm"
import { PayoutWallet } from "./payout-wallet.entity"

export const walletProvider = {
  provide: "PAYOUT_WALLET_REPOSITORY",
  useFactory: (dataSource: DataSource) =>
    dataSource.getRepository(PayoutWallet),
  inject: ["DATA_SOURCE"]
}
