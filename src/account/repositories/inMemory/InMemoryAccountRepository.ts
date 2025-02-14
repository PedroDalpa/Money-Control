import { AccountModel } from 'src/account/model/AccountModel'
import { IAccountRepository } from '../IAccountRepository'

class InMemoryAccountRepository implements IAccountRepository {
  accounts: AccountModel[] = []
  async findById(id: string): Promise<AccountModel> {
    const account = this.accounts.find((account) => account.id === id)

    if (!account) {
      throw new Error('Account not found')
    }

    return Promise.resolve(account)
  }

  async getInitialValue(id: string): Promise<{ initialValue: number }> {
    const account = this.accounts.find((account) => account.id === id)

    if (!account) {
      throw new Error('Account not found')
    }

    return Promise.resolve({ initialValue: account.initialValue })
  }
}

export { InMemoryAccountRepository }
