import { IRevenueRepository } from '../IRevenueRepository'
import { CreateRevenueModel } from '../../model/CreateRevenueModel'

class InMemoryRevenueRepository implements IRevenueRepository {
  revenues: CreateRevenueModel[] = []
  async create(props: CreateRevenueModel): Promise<CreateRevenueModel> {
    const revenue = new CreateRevenueModel(props)

    this.revenues.push(revenue)

    return Promise.resolve(revenue)
  }
}

export { InMemoryRevenueRepository }
