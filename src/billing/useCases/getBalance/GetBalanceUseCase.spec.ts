import { GetInitialValue } from '../../../account/useCases/getInitialValue/GetInitialValueUseCase'
import { GetBalanceUseCase } from './GetBalanceUseCase'
import {
  CreateRevenueFactory,
  RevenueRepositoryFactory
} from '../../../../test/factories/revenue.factory'
import {
  CreateDisbursementFactory,
  DisbursementRepositoryFactory
} from '../../../../test/factories/disbursement.factory'
import {
  AccountRepositoryFactory,
  CreateAccountFactory
} from '../../../../test/factories/account.factory'

const revenueRepository = RevenueRepositoryFactory()
const disbursementRepository = DisbursementRepositoryFactory()
const accountRepository = AccountRepositoryFactory()
const accountId = 'teste'
describe('Get balance use case', () => {
  beforeEach(() => {
    CreateRevenueFactory({
      revenueRepository,
      props: { value: 25, accountId }
    })

    CreateDisbursementFactory({
      disbursementRepository,
      props: { value: 50, accountId }
    })

    CreateAccountFactory({
      accountRepository,
      props: { initialValue: 100, id: accountId }
    })
  })

  const getInitialValueUseCase = new GetInitialValue(accountRepository)
  it('Should be able to get balance revenue register', async () => {
    const useCase = new GetBalanceUseCase(
      getInitialValueUseCase,
      disbursementRepository,
      revenueRepository
    )
    const { balance } = await useCase.execute({ accountId })

    expect(balance).toBe(75)
  })
})
