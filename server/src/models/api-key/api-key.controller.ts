import { Controller, Get, UseInterceptors } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { ResponseInterceptor } from "src/common/response.interceptor"
import { ApiKey } from "./api-key.entity"
import { ApiKeyService } from "./api-key.service"

@ApiTags("ipn")
@UseInterceptors(ResponseInterceptor)
@Controller({
  version: "1",
  path: "ipn"
})
export class ApiKeyController {
  constructor(private readonly apiKeyService: ApiKeyService) {}

  @Get()
  getKeyById(): Promise<ApiKey> {
    return this.apiKeyService.getById(1)
  }
}
