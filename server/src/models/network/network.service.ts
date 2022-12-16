import { Inject, Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { Network } from "./network.entity"

@Injectable()
export class NetworkService {
  constructor(
    @Inject("NETWORK_REPOSITORY")
    private networkRepository: Repository<Network>
  ) {}

  getById(id: number): Promise<Network> {
    try {
      return this.networkRepository.findOneBy({ id })
    } catch (err) {
      // return responseError(ctx, errorBuilder.buildNotFoundError())
    }
  }
}
