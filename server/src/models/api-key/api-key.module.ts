import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { ApiKeyController } from "./api-key.controller"
import { ApiKey } from "./api-key.entity"
import { ApiKeyService } from "./api-key.service"

@Module({
  imports: [TypeOrmModule.forFeature([ApiKey])],
  controllers: [ApiKeyController],
  providers: [ApiKeyService],
  exports: [TypeOrmModule]
})
export class ApiKeyModule {}
