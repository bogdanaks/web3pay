import { Module } from "@nestjs/common"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { TypeOrmModule } from "@nestjs/typeorm"

import { AuthModule } from "src/auth/auth.module"
import { ApiKeyModule } from "../api-key/api-key.module"
import { CurrencyModule } from "../currency/currency.module"
import { InvoiceModule } from "../invoice/invoice.module"
import { IpnModule } from "../ipn/ipn.module"
import { NetworkModule } from "../network/network.module"
import { PaymentModule } from "../payment/payment.module"
import { ShopModule } from "../shop/shop.module"
import { UserModule } from "../user/user.module"
import { WalletModule } from "../wallet/wallet.module"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: "postgres",
        host: configService.get("PG_HOST"),
        port: configService.get("PG_PORT"),
        username: configService.get("PG_USER"),
        password: configService.get("PG_PASSWORD"),
        database: configService.get("PG_DATABASE"),
        synchronize: false,
        autoLoadEntities: true
      }),
      inject: [ConfigService]
    }),
    AuthModule,
    UserModule,
    CurrencyModule,
    NetworkModule,
    ApiKeyModule,
    InvoiceModule,
    IpnModule,
    PaymentModule,
    ShopModule,
    WalletModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
