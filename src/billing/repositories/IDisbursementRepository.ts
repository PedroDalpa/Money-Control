import { CreateDisbursementModel } from '../model/CreateDisbursementModel'

interface IDisbursementRepository {
  create(props: CreateDisbursementModel): Promise<CreateDisbursementModel>
}

export { IDisbursementRepository }
