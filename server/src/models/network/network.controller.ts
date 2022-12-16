import { Controller, Get, UseInterceptors } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { ResponseInterceptor } from "src/common/response.interceptor"
import { Network } from "./network.entity"
import { NetworkService } from "./network.service"

@ApiTags("network")
@UseInterceptors(ResponseInterceptor)
@Controller({
  version: "1",
  path: "network"
})
export class NetworkController {
  constructor(private readonly networkService: NetworkService) {}

  @Get()
  getById(): Promise<Network> {
    return this.networkService.getById(1)
  }
}
