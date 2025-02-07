import { IAccountRepository } from 'src/account/repositories/IAccountRepository'
import { ICreateDebitDTO } from 'src/billing/dtos/ICreateBilling'
import {
  CreateDebit,
  IBillingRepository
} from 'src/billing/repositories/IBillingRepository'
import { IUserRepository } from 'src/user/repositories/IUserRepository'

class CreateDebitUseCase {
  constructor(
    private billingRepository: IBillingRepository,
    private accountRepository: IAccountRepository,
    private userRepository: IUserRepository
  ) {}

  async execute(props: ICreateDebitDTO): Promise<CreateDebit> {
    const account = await this.accountRepository.findById(props.accountId)
    if (!account) {
      throw new Error('cannot find account')
    }

    const user = await this.userRepository.findById(props.userId)
    if (!user) {
      throw new Error('cannot find user')
    }

    if (props.value <= 0) {
      throw new Error('Invalid billing value')
    }

    const result = await this.billingRepository.create(props)

    return result
  }
}

export { CreateDebitUseCase }
