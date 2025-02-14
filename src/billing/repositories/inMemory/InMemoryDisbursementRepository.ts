import { IDisbursementRepository } from '../IDisbursementRepository'
import { DisbursementModel } from '../../model/DisbursementModel'

class InMemoryDisbursementRepository implements IDisbursementRepository {
  disbursements: DisbursementModel[] = []
  async create(props: DisbursementModel): Promise<DisbursementModel> {
    const disbursement = new DisbursementModel(props)

    this.disbursements.push(disbursement)

    return Promise.resolve(disbursement)
  }

  async sumByAccountId(
    accountId: string
  ): Promise<{ sumDisbursement: number }> {
    const sumDisbursement = this.disbursements
      .filter((disbursement) => disbursement.accountId === accountId)
      .reduce((acc, disbursement) => acc + disbursement.value, 0)

    return Promise.resolve({ sumDisbursement })
  }
}

export { InMemoryDisbursementRepository }
