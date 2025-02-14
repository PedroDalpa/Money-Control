import { InjectRepository } from '@nestjs/typeorm'
import { CreateRevenueModel } from 'src/billing/model/CreateRevenueModel'
import { IRevenueRepository } from 'src/billing/repositories/IRevenueRepository'
import { Repository } from 'typeorm'
import { Revenue } from '../entities/revenue.entity'
import { Injectable } from '@nestjs/common'

@Injectable()
class DatabaseRevenueRepository implements IRevenueRepository {
  constructor(
    @InjectRepository(Revenue)
    private readonly revenueEntityRepository: Repository<Revenue>
  ) {}

  async create(props: CreateRevenueModel): Promise<CreateRevenueModel> {
    const revenue = this.toRevenueEntity(props)
    await this.revenueEntityRepository.insert(revenue)
    return this.toRevenue(revenue)
  }

  private toRevenueEntity(revenue: CreateRevenueModel): Revenue {
    const revenueEntity = new Revenue()

    Object.assign(revenueEntity, { ...revenue })

    return revenueEntity
  }

  private toRevenue(revenueEntity: Revenue): CreateRevenueModel {
    const revenue = new CreateRevenueModel(revenueEntity)

    return revenue
  }
}

export { DatabaseRevenueRepository }
