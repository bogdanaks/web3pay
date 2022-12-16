import { Module } from "@nestjs/common"
import { DatabaseModule } from "src/providers/database/database.module"
import { WalletController } from "./wallet.controller"
import { walletProvider } from "./wallet.provider"
import { WalletService } from "./wallet.service"

@Module({
  imports: [DatabaseModule],
  controllers: [WalletController],
  providers: [WalletService, walletProvider]
})
export class WalletModule {}
