import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { CurrencyModule } from "../currency/currency.module"
import { NetworkController } from "./network.controller"
import { Network } from "./network.entity"
import { NetworkService } from "./network.service"

@Module({
  imports: [TypeOrmModule.forFeature([Network]), CurrencyModule],
  controllers: [NetworkController],
  providers: [NetworkService],
  exports: [TypeOrmModule]
})
export class NetworkModule {}
