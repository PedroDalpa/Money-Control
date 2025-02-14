import { Inject } from '@nestjs/common'
import { ICreateRevenueDTO } from '../../dtos/ICreateRevenue'
import { RevenueModel } from '../../model/RevenueModel'
import { IRevenueRepository } from '../../repositories/IRevenueRepository'

type IResponse = {
  revenue: RevenueModel
}

class CreateRevenueUseCase {
  constructor(
    @Inject('IRevenueRepository')
    private billingRepository: IRevenueRepository
  ) {}

  async execute(props: ICreateRevenueDTO): Promise<IResponse> {
    try {
      const revenue = new RevenueModel(props)
      await this.billingRepository.create(revenue)
      return { revenue }
    } catch (error) {
      throw new Error(`Some erro an occurred: Error: ${error}`)
    }
  }
}

export { CreateRevenueUseCase }
