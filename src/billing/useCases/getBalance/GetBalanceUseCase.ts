import { GetInitialValue } from 'src/account/useCases/getInitialValue/GetInitialValueUseCase'
import { IDisbursementRepository } from 'src/billing/repositories/IDisbursementRepository'
import { IRevenueRepository } from 'src/billing/repositories/IRevenueRepository'

type IRequest = {
  accountId: string
}

class GetBalanceUseCase {
  constructor(
    private getInitialValueUseCase: GetInitialValue,
    private disbursementRepository: IDisbursementRepository,
    private revenueRepository: IRevenueRepository
  ) {}
  async execute({ accountId }: IRequest): Promise<{ balance: number }> {
    const { initialValue } = await this.getInitialValueUseCase.execute({
      id: accountId
    })

    const { sumDisbursement } =
      await this.disbursementRepository.sumByAccountId(accountId)

    const { sumRevenue } =
      await this.revenueRepository.sumByAccountId(accountId)
    console.log(initialValue, '\n', sumRevenue, '\n', sumDisbursement)

    const balance = initialValue + sumRevenue - sumDisbursement

    return { balance }
  }
}

export { GetBalanceUseCase }
