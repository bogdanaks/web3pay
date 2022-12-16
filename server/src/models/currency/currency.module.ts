import { Module } from "@nestjs/common"
import { DatabaseModule } from "src/providers/database/database.module"
import { CurrencyController } from "./currency.controller"
import { currencyProvider } from "./currency.provider"
import { CurrencyService } from "./currency.service"

@Module({
  imports: [DatabaseModule],
  controllers: [CurrencyController],
  providers: [CurrencyService, currencyProvider]
})
export class CurrencyModule {}
