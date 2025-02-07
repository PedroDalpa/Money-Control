import { ICreateDebitDTO } from 'src/billing/dtos/ICreateBilling'
import { CreateDebit, IBillingRepository } from '../IBillingRepository'

class InMemoryBillingRepository implements IBillingRepository {
  billings: CreateDebit[] = []
  async create(props: ICreateDebitDTO): Promise<CreateDebit> {
    const billing: CreateDebit = { id: crypto.randomUUID(), ...props }
    this.billings.push(billing)

    return Promise.resolve(billing)
  }
}

export { InMemoryBillingRepository }
