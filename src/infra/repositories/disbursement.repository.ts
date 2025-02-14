import { InjectRepository } from '@nestjs/typeorm'
import { DisbursementModel } from 'src/billing/model/DisbursementModel'
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

  async create(props: DisbursementModel): Promise<DisbursementModel> {
    const disbursement = this.toDisbursementEntity(props)
    await this.disbursementEntityRepository.insert(disbursement)
    return this.toDisbursement(disbursement)
  }

  private toDisbursementEntity(disbursement: DisbursementModel): Disbursement {
    const disbursementEntity = new Disbursement()

    Object.assign(disbursementEntity, { ...disbursement })

    return disbursementEntity
  }

  private toDisbursement(disbursementEntity: Disbursement): DisbursementModel {
    const disbursement = new DisbursementModel(disbursementEntity)

    return disbursement
  }
}

export { DatabaseDisbursementRepository }
