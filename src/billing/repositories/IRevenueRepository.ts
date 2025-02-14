import { CreateRevenueModel } from '../model/CreateRevenueModel'

interface IRevenueRepository {
  create(props: CreateRevenueModel): Promise<CreateRevenueModel>
}

export { IRevenueRepository }
