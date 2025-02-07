import {
  IAccountRepository,
  Account
} from 'src/account/repositories/IAccountRepository'

interface IResponse {
  account: Account
}

interface IRequest {
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
