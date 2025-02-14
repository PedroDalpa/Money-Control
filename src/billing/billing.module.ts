import { Module } from '@nestjs/common'
import { CreateDisbursementUseCase } from './useCases/createDisbursement/CreateDisbursementUseCase'
import { RepositoriesModule } from 'src/infra/repositories/repositories.module'
import { DisbursementController } from 'src/infra/controllers/billing/disbursement.controller'
import { DatabaseDisbursementRepository } from 'src/infra/repositories/disbursement.repository'

@Module({
  imports: [RepositoriesModule],
  controllers: [DisbursementController],
  providers: [
    CreateDisbursementUseCase,
    {
      provide: 'IDisbursementRepository',
      useExisting: DatabaseDisbursementRepository
    }
  ]
})
export class BillingModule {}
