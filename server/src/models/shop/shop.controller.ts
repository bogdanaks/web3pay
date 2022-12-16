import { Controller, Get, UseInterceptors } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { ResponseInterceptor } from "src/common/response.interceptor"
import { Shop } from "./shop.entity"
import { ShopService } from "./shop.service"

@ApiTags("shop")
@UseInterceptors(ResponseInterceptor)
@Controller({
  version: "1",
  path: "shop"
})
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get()
  getById(): Promise<Shop> {
    return this.shopService.getById(1)
  }
}
