import { Inject, Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { Currency } from "./currency.entity"

@Injectable()
export class CurrencyService {
  constructor(
    @Inject("CURRENCY_REPOSITORY")
    private currencyRepository: Repository<Currency>
  ) {}

  getById(id: number): Promise<Currency> {
    try {
      return this.currencyRepository.findOneBy({ id })
    } catch (err) {
      // return responseError(ctx, errorBuilder.buildNotFoundError())
    }
  }
}
