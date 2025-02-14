import { Body, Controller, Inject, Post } from '@nestjs/common'
import { ICreateRevenueDTO } from '../../../billing/dtos/ICreateRevenue'
import { CreateRevenueUseCase } from 'src/billing/useCases/createRevenue/CreateRevenueUseCase'

@Controller('revenue')
export class RevenueController {
  constructor(
    @Inject(CreateRevenueUseCase)
    private readonly createRevenueUseCase: CreateRevenueUseCase
  ) {}

  @Post()
  async createRevenue(@Body() createRevenue: ICreateRevenueDTO) {
    const revenueCreated =
      await this.createRevenueUseCase.execute(createRevenue)

    return { revenueCreated }
  }
}
