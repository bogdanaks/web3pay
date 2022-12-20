import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { PayoutWallet } from "./payout-wallet.entity"

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(PayoutWallet)
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
