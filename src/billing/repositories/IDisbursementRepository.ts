import { DisbursementModel } from '../model/DisbursementModel'

interface IDisbursementRepository {
  create(props: DisbursementModel): Promise<DisbursementModel>
  sumByAccountId(accountId: string): Promise<{ sumDisbursement: number }>
}

export { IDisbursementRepository }
