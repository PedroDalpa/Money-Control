import { Body, Controller, Inject, Post } from '@nestjs/common'
import { ICreateDisbursementDTO } from '../../../billing/dtos/ICreateDisbursement'
import { CreateDisbursementUseCase } from 'src/billing/useCases/createDisbursement/CreateDisbursementUseCase'

@Controller('disbursement')
export class DisbursementController {
  constructor(
    @Inject(CreateDisbursementUseCase)
    private readonly createDisbursementUseCase: CreateDisbursementUseCase
  ) {}

  @Post()
  async createDisbursement(@Body() createDisbursement: ICreateDisbursementDTO) {
    const disbursementCreated =
      await this.createDisbursementUseCase.execute(createDisbursement)

    return { disbursementCreated }
  }
}
