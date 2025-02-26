import { AccountModel } from 'src/account/model/AccountModel'
import { IAccountRepository } from 'src/account/repositories/IAccountRepository'

type IResponse = {
  account: AccountModel
}

type IRequest = {
  accountId: string
}

class ValidateAccountUseCase {
  constructor(private accountRepository: IAccountRepository) {}
  async execute({ accountId }: IRequest): Promise<IResponse> {
    const account = await this.accountRepository.findById(accountId)

    if (!account) {
      throw new Error('Invalid account')
    }

    return { account }
  }
}

export { ValidateAccountUseCase }
