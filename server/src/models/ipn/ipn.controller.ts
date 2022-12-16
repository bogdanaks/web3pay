import { Controller, Get, UseInterceptors } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { ResponseInterceptor } from "src/common/response.interceptor"
import { IpnKey } from "./ipn-key.entity"
import { IpnService } from "./ipn.service"

@ApiTags("ipn")
@UseInterceptors(ResponseInterceptor)
@Controller({
  version: "1",
  path: "ipn"
})
export class IpnController {
  constructor(private readonly ipnService: IpnService) {}

  @Get()
  getKeyById(): Promise<IpnKey> {
    return this.ipnService.getById(1)
  }
}
