import { Module } from "@nestjs/common"
import { DatabaseModule } from "src/providers/database/database.module"
import { IpnController } from "./ipn.controller"
import { ipnProvider } from "./ipn.provider"
import { IpnService } from "./ipn.service"

@Module({
  imports: [DatabaseModule],
  controllers: [IpnController],
  providers: [IpnService, ipnProvider]
})
export class IpnModule {}
