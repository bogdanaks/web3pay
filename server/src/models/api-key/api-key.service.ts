import { Inject, Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { ApiKey } from "./api-key.entity"

@Injectable()
export class ApiKeyService {
  constructor(
    @Inject("API_KEY_REPOSITORY")
    private apiKeyRepository: Repository<ApiKey>
  ) {}

  getById(id: number): Promise<ApiKey> {
    try {
      return this.apiKeyRepository.findOneBy({ id })
    } catch (err) {
      // return responseError(ctx, errorBuilder.buildNotFoundError())
    }
  }
}
