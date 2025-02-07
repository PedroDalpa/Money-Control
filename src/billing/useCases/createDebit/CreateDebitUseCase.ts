import { ICreateDebitDTO } from 'src/billing/dtos/ICreateBilling'
import {
  CreateDebit,
  IBillingRepository
} from 'src/billing/repositories/IBillingRepository'

class CreateDebitUseCase {
  constructor(private billingRepository: IBillingRepository) {}

  async execute(props: ICreateDebitDTO): Promise<CreateDebit> {
    const result = await this.billingRepository.create(props)

    return result
  }
}

export { CreateDebitUseCase }
