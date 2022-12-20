import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { Currency } from "./currency.entity"

@Injectable()
export class CurrencyService {
  constructor(
    @InjectRepository(Currency)
    private currencyRepository: Repository<Currency>
  ) {}

  async getAll(): Promise<Currency[]> {
    return await this.currencyRepository.find({ order: { id: "ASC" } })
  }

  async getById(id: number): Promise<Currency> {
    return await this.currencyRepository.findOneBy({ id })
  }
}
