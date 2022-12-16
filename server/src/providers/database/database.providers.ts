import { ConfigService } from "@nestjs/config"
import { Currency } from "src/models/currency/currency.entity"
import { Invoice } from "src/models/invoice/entities/invoice.entity"
import { Network } from "src/models/network/network.entity"
import { Payment } from "src/models/payment/payment.entity"
import { Shop } from "src/models/shop/shop.entity"
import { User } from "src/models/user/user.entity"
import { DataSource } from "typeorm"

export const databaseProviders = [
  {
    provide: "DATA_SOURCE",
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: "postgres",
        host: configService.get("PG_HOST"),
        port: configService.get("PG_PORT"),
        username: configService.get("PG_USER"),
        password: configService.get("PG_PASSWORD"),
        database: configService.get("PG_DATABASE"),
        entities: [User, Currency, Network, Shop, Invoice, Payment],
        synchronize: false
        // ssl: {
        //   rejectUnauthorized: false,
        // },
      })
      return dataSource.initialize()
    },
    inject: [ConfigService]
  }
]
