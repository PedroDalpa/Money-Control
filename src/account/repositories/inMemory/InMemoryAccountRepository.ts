import { Account } from 'src/account/model/AccountModel'
import { IAccountRepository } from '../IAccountRepository'

class InMemoryAccountRepository implements IAccountRepository {
  accounts: Account[] = []
  async findById(id: string): Promise<Account> {
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
