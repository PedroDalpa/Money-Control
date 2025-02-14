import { AccountModel } from '../model/AccountModel'

interface IAccountRepository {
  findById(id: string): Promise<AccountModel>
  getInitialValue(id: string): Promise<{ initialValue: number }>
}

export { IAccountRepository }
