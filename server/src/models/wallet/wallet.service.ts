import { Inject, Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { PayoutWallet } from "./payout-wallet.entity"

@Injectable()
export class WalletService {
  constructor(
    @Inject("PAYOUT_WALLET_REPOSITORY")
    private payoutWalletRepository: Repository<PayoutWallet>
  ) {}

  getById(id: number): Promise<PayoutWallet> {
    try {
      return this.payoutWalletRepository.findOneBy({ id })
    } catch (err) {
      // return responseError(ctx, errorBuilder.buildNotFoundError())
    }
  }
}
