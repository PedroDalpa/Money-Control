import { ICreateDebitDTO } from '../dtos/ICreateBilling'

interface CreateDebit extends ICreateDebitDTO {
  id: string
}

interface IBillingRepository {
  create(props: ICreateDebitDTO): Promise<CreateDebit>
}

export { CreateDebit, IBillingRepository }
