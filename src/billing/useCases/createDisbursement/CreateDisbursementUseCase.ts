import { Inject } from '@nestjs/common'
import { ICreateDisbursementDTO } from '../../dtos/ICreateDisbursement'
import { CreateDisbursementModel } from '../../model/CreateDisbursementModel'
import { IDisbursementRepository } from '../../repositories/IDisbursementRepository'

type IResponse = {
  disbursement: CreateDisbursementModel
}

class CreateDisbursementUseCase {
  constructor(
    @Inject('IDisbursementRepository')
    private billingRepository: IDisbursementRepository
  ) {}

  async execute(props: ICreateDisbursementDTO): Promise<IResponse> {
    try {
      const disbursement = new CreateDisbursementModel(props)
      await this.billingRepository.create(disbursement)
      return { disbursement }
    } catch (error) {
      throw new Error(`Some erro an occurred: Error: ${error}`)
    }
  }
}

export { CreateDisbursementUseCase }
