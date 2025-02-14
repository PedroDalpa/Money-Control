import { IRevenueRepository } from '../IRevenueRepository'
import { RevenueModel } from '../../model/RevenueModel'

class InMemoryRevenueRepository implements IRevenueRepository {
  revenues: RevenueModel[] = []
  async create(props: RevenueModel): Promise<RevenueModel> {
    const revenue = new RevenueModel(props)

    this.revenues.push(revenue)

    return Promise.resolve(revenue)
  }
}

export { InMemoryRevenueRepository }
