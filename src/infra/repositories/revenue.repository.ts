import { InjectRepository } from '@nestjs/typeorm'
import { RevenueModel } from 'src/billing/model/RevenueModel'
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

  async create(props: RevenueModel): Promise<RevenueModel> {
    const revenue = this.toRevenueEntity(props)
    await this.revenueEntityRepository.insert(revenue)
    return this.toRevenue(revenue)
  }

  private toRevenueEntity(revenue: RevenueModel): Revenue {
    const revenueEntity = new Revenue()

    Object.assign(revenueEntity, { ...revenue })

    return revenueEntity
  }

  private toRevenue(revenueEntity: Revenue): RevenueModel {
    const revenue = new RevenueModel(revenueEntity)

    return revenue
  }
}

export { DatabaseRevenueRepository }
