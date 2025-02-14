import { IDisbursementRepository } from '../IDisbursementRepository'
import { CreateDisbursementModel } from '../../model/CreateDisbursementModel'

class InMemoryDisbursementRepository implements IDisbursementRepository {
  disbursements: CreateDisbursementModel[] = []
  async create(
    props: CreateDisbursementModel
  ): Promise<CreateDisbursementModel> {
    const disbursement = new CreateDisbursementModel(props)

    this.disbursements.push(disbursement)

    return Promise.resolve(disbursement)
  }
}

export { InMemoryDisbursementRepository }
