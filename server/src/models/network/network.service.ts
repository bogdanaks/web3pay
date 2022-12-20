import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { FindOptionsWhere, Repository } from "typeorm"
import { Network } from "./network.entity"

@Injectable()
export class NetworkService {
  constructor(
    @InjectRepository(Network)
    private networkRepository: Repository<Network>
  ) {}

  async getAll(): Promise<Network[]> {
    return await this.networkRepository.find({ order: { id: "ASC" } })
  }

  async findOneBy(where: FindOptionsWhere<Network>): Promise<Network> {
    return await this.networkRepository.findOneBy(where)
  }

  async findAllBy(where: FindOptionsWhere<Network>): Promise<Network[]> {
    return await this.networkRepository.findBy(where)
  }
}
