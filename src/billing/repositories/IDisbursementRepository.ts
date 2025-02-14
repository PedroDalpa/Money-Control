import { CreateDisbursementModel } from '../model/DisbursementModel'

interface IDisbursementRepository {
  create(props: CreateDisbursementModel): Promise<CreateDisbursementModel>
}

export { IDisbursementRepository }
