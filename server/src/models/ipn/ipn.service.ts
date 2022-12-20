import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { IpnKey } from "./ipn-key.entity"

@Injectable()
export class IpnService {
  constructor(
    @InjectRepository(IpnKey)
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
