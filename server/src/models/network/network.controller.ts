import {
  Controller,
  Get,
  UseInterceptors,
  ValidationPipe,
  Query
} from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { ResponseInterceptor } from "src/common/response.interceptor"
import { CurrencyService } from "../currency/currency.service"
import { FindAllNetworks } from "./dto/find-all.dto"
import { Network } from "./network.entity"
import { NetworkService } from "./network.service"

@ApiTags("network")
@UseInterceptors(ResponseInterceptor)
@Controller({
  version: "1",
  path: "network"
})
export class NetworkController {
  constructor(
    private readonly networkService: NetworkService,
    private readonly currencyService: CurrencyService
  ) {}

  @Get()
  async findAll(
    @Query(
      new ValidationPipe({
        skipMissingProperties: true,
        skipUndefinedProperties: true
      })
    )
    data: FindAllNetworks
  ): Promise<Network[]> {
    if (!data) return this.networkService.getAll()

    if (data.with_currencies && data.with_currencies === "true") {
      const currencies = await this.currencyService.getAll()
      const networks = await this.networkService.getAll()
      return networks.map((network) => {
        return {
          ...network,
          currencies: currencies.filter(
            (currency) => currency.network_id === network.id
          )
        }
      })
    }

    return this.networkService.getAll()
  }

  @Get(":id")
  getById(): Promise<Network> {
    return this.networkService.findOneBy({ id: 1 })
  }
}
