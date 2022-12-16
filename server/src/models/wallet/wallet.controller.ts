import { Controller, Get, UseInterceptors } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { ResponseInterceptor } from "src/common/response.interceptor"
import { PayoutWallet } from "./payout-wallet.entity"
import { WalletService } from "./wallet.service"

@ApiTags("wallet")
@UseInterceptors(ResponseInterceptor)
@Controller({
  version: "1",
  path: "wallet"
})
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Get()
  getKeyById(): Promise<PayoutWallet> {
    return this.walletService.getById(1)
  }
}
