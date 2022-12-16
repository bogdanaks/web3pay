import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { DatabaseModule } from "src/providers/database/database.module"
import { UserController } from "./user.controller"
import { userProvider } from "./user.provider"
import { UserService } from "./user.service"

@Module({
  imports: [DatabaseModule, ConfigModule],
  controllers: [UserController],
  providers: [UserService, userProvider],
  exports: [UserService]
})
export class UserModule {}
