import { Account } from '../model/AccountModel'

interface IAccountRepository {
  findById(id: string): Promise<Account>
  getInitialValue(id: string): Promise<{ initialValue: number }>
}

export { IAccountRepository }
