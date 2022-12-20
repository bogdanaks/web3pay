import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { PayoutWallet } from "./payout-wallet.entity"
import { WalletController } from "./wallet.controller"
import { WalletService } from "./wallet.service"

@Module({
  imports: [TypeOrmModule.forFeature([PayoutWallet])],
  controllers: [WalletController],
  providers: [WalletService],
  exports: [TypeOrmModule]
})
export class WalletModule {}
