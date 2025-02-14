import { IRevenueRepository } from '../IRevenueRepository'
import { RevenueModel } from '../../model/RevenueModel'

class InMemoryRevenueRepository implements IRevenueRepository {
  revenues: RevenueModel[] = []
  async create(props: RevenueModel): Promise<RevenueModel> {
    const revenue = new RevenueModel(props)

    this.revenues.push(revenue)

    return Promise.resolve(revenue)
  }

  async sumByAccountId(accountId: string): Promise<{ sumRevenue: number }> {
    const sumRevenue = this.revenues
      .filter((revenue) => revenue.accountId === accountId)
      .reduce((acc, revenue) => acc + revenue.value, 0)
    return Promise.resolve({ sumRevenue })
  }
}

export { InMemoryRevenueRepository }
