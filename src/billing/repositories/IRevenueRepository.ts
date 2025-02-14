import { RevenueModel } from '../model/RevenueModel'

interface IRevenueRepository {
  create(props: RevenueModel): Promise<RevenueModel>
  sumByAccountId(accountId: string): Promise<{ sumRevenue: number }>
}

export { IRevenueRepository }
