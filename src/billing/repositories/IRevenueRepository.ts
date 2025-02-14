import { RevenueModel } from '../model/RevenueModel'

interface IRevenueRepository {
  create(props: RevenueModel): Promise<RevenueModel>
}

export { IRevenueRepository }
