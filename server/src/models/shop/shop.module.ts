import { Module } from "@nestjs/common"
import { DatabaseModule } from "src/providers/database/database.module"
import { ShopController } from "./shop.controller"
import { shopProvider } from "./shop.provider"
import { ShopService } from "./shop.service"

@Module({
  imports: [DatabaseModule],
  controllers: [ShopController],
  providers: [ShopService, shopProvider],
  exports: [ShopService]
})
export class ShopModule {}
