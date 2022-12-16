import { Module } from "@nestjs/common"
import { DatabaseModule } from "src/providers/database/database.module"
import { NetworkController } from "./network.controller"
import { networkProvider } from "./network.provider"
import { NetworkService } from "./network.service"

@Module({
  imports: [DatabaseModule],
  controllers: [NetworkController],
  providers: [NetworkService, networkProvider]
})
export class NetworkModule {}
