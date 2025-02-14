import { Inject } from '@nestjs/common'
import { DisbursementModel } from '../../model/DisbursementModel'
import { IDisbursementRepository } from '../../repositories/IDisbursementRepository'
import { ICreateDisbursementDTO } from 'src/billing/dtos/ICreateDisbursement'

type IResponse = {
  disbursement: DisbursementModel
}

class CreateDisbursementUseCase {
  constructor(
    @Inject('IDisbursementRepository')
    private billingRepository: IDisbursementRepository
  ) {}

  async execute(props: ICreateDisbursementDTO): Promise<IResponse> {
    try {
      const disbursement = new DisbursementModel(props)

      await this.billingRepository.create(disbursement)

      return { disbursement }
    } catch (error) {
      throw new Error(`Some erro an occurred: Error: ${error}`)
    }
  }
}

export { CreateDisbursementUseCase }
