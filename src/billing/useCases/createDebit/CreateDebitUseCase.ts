import { IAccountRepository } from 'src/account/repositories/IAccountRepository'
import { ICreateDebitDTO } from 'src/billing/dtos/ICreateBilling'
import {
  CreateDebit,
  IBillingRepository
} from 'src/billing/repositories/IBillingRepository'

class CreateDebitUseCase {
  constructor(
    private billingRepository: IBillingRepository,
    private accountRepository: IAccountRepository
  ) {}

  async execute(props: ICreateDebitDTO): Promise<CreateDebit> {
    const account = await this.accountRepository.findById(props.accountId)
    if (!account) {
      throw new Error('cannot find account')
    }
    const result = await this.billingRepository.create(props)

    return result
  }
}

export { CreateDebitUseCase }
