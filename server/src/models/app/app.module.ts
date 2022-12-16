import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
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
