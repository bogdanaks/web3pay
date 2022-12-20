import { Injectable, BadRequestException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { FindOptionsWhere, Repository } from "typeorm"
import { Shop } from "./shop.entity"

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(Shop)
    private shopRepository: Repository<Shop>
  ) {}

  async findBy(where: FindOptionsWhere<Shop>): Promise<Shop> {
    const shop = await this.shopRepository.findOneBy(where)
    if (!shop) throw new BadRequestException()
    return shop
  }

  async getById(id: number): Promise<Shop> {
    return await this.shopRepository.findOneBy({ id })
  }

  async createShop({ user_id }: { user_id: number }): Promise<Shop> {
    return await this.shopRepository.create({ user_id })
  }

  async saveShop(shop: Shop): Promise<Shop> {
    return await this.shopRepository.save(shop)
  }
}
