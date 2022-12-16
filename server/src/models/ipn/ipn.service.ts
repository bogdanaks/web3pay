import { Inject, Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { IpnKey } from "./ipn-key.entity"

@Injectable()
export class IpnService {
  constructor(
    @Inject("IPN_KEY_REPOSITORY")
    private ipnKeyRepository: Repository<IpnKey>
  ) {}

  getById(id: number): Promise<IpnKey> {
    try {
      return this.ipnKeyRepository.findOneBy({ id })
    } catch (err) {
      // return responseError(ctx, errorBuilder.buildNotFoundError())
    }
  }
}
