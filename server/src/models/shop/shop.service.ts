import { Inject, Injectable, BadRequestException } from "@nestjs/common"
import { FindOptionsWhere, Repository } from "typeorm"
import { Shop } from "./shop.entity"

@Injectable()
export class ShopService {
  constructor(
    @Inject("SHOP_REPOSITORY")
    private shopRepository: Repository<Shop>
  ) {}

  async findBy(where: FindOptionsWhere<Shop>): Promise<Shop> {
    const shop = await this.shopRepository.findOneBy(where)
    if (!shop) throw new BadRequestException()
    return shop
  }

  getById(id: number): Promise<Shop> {
    try {
      return this.shopRepository.findOneBy({ id })
    } catch (err) {
      // return responseError(ctx, errorBuilder.buildNotFoundError())
    }
  }

  createShop({ user_id }: { user_id: number }): void {
    try {
      this.shopRepository.save({ user_id })
    } catch (error) {
      // error
    }
  }
}
