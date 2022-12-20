import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { IpnKey } from "./ipn-key.entity"
import { IpnController } from "./ipn.controller"
import { IpnService } from "./ipn.service"

@Module({
  imports: [TypeOrmModule.forFeature([IpnKey])],
  controllers: [IpnController],
  providers: [IpnService],
  exports: [TypeOrmModule]
})
export class IpnModule {}
