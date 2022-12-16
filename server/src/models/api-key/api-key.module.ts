import { Module } from "@nestjs/common"
import { DatabaseModule } from "src/providers/database/database.module"
import { ApiKeyController } from "./api-key.controller"
import { apiKeyProvider } from "./api-key.provider"
import { ApiKeyService } from "./api-key.service"

@Module({
  imports: [DatabaseModule],
  controllers: [ApiKeyController],
  providers: [ApiKeyService, apiKeyProvider]
})
export class ApiKeyModule {}
