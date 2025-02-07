import { Account, IAccountRepository } from '../IAccountRepository'

class InMemoryAccountRepository implements IAccountRepository {
  accounts: Account[] = []
  async findById(id: string): Promise<Account | undefined> {
    const account = this.accounts.find((account) => account.id === id)

    return Promise.resolve(account)
  }
}

export { InMemoryAccountRepository }
