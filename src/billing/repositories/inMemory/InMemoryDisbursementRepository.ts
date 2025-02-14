import { IDisbursementRepository } from '../IDisbursementRepository'
import { DisbursementModel } from '../../model/DisbursementModel'

class InMemoryDisbursementRepository implements IDisbursementRepository {
  disbursements: DisbursementModel[] = []
  async create(props: DisbursementModel): Promise<DisbursementModel> {
    const disbursement = new DisbursementModel(props)

    this.disbursements.push(disbursement)

    return Promise.resolve(disbursement)
  }
}

export { InMemoryDisbursementRepository }
