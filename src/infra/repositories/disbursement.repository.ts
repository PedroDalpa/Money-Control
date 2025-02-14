import { InjectRepository } from '@nestjs/typeorm'
import { CreateDisbursementModel } from 'src/billing/model/CreateDisbursementModel'
import { IDisbursementRepository } from 'src/billing/repositories/IDisbursementRepository'
import { Repository } from 'typeorm'
import { Disbursement } from '../entities/disbursement.entity'
import { Injectable } from '@nestjs/common'

@Injectable()
class DatabaseDisbursementRepository implements IDisbursementRepository {
  constructor(
    @InjectRepository(Disbursement)
    private readonly disbursementEntityRepository: Repository<Disbursement>
  ) {}

  async create(
    props: CreateDisbursementModel
  ): Promise<CreateDisbursementModel> {
    const disbursement = this.toDisbursementEntity(props)
    await this.disbursementEntityRepository.insert(disbursement)
    return this.toDisbursement(disbursement)
  }

  private toDisbursementEntity(
    disbursement: CreateDisbursementModel
  ): Disbursement {
    const disbursementEntity = new Disbursement()

    Object.assign(disbursementEntity, { ...disbursement })

    return disbursementEntity
  }

  private toDisbursement(
    disbursementEntity: Disbursement
  ): CreateDisbursementModel {
    const disbursement = new CreateDisbursementModel(disbursementEntity)

    return disbursement
  }
}

export { DatabaseDisbursementRepository }
