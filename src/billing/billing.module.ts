import { Module } from '@nestjs/common'
import { CreateDisbursementUseCase } from './useCases/createDisbursement/CreateDisbursementUseCase'
import { RepositoriesModule } from 'src/infra/repositories/repositories.module'
import { DisbursementController } from 'src/infra/controllers/billing/disbursement.controller'
import { DatabaseDisbursementRepository } from 'src/infra/repositories/disbursement.repository'
import { RevenueController } from 'src/infra/controllers/billing/revenue.controller'
import { CreateRevenueUseCase } from './useCases/createRevenue/CreateRevenueUseCase'
import { DatabaseRevenueRepository } from 'src/infra/repositories/revenue.repository'
@Module({
  imports: [RepositoriesModule],
  controllers: [DisbursementController, RevenueController],
  providers: [
    CreateDisbursementUseCase,
    CreateRevenueUseCase,
    {
      provide: 'IDisbursementRepository',
      useExisting: DatabaseDisbursementRepository
    },
    {
      provide: 'IRevenueRepository',
      useExisting: DatabaseRevenueRepository
    }
  ]
})
export class BillingModule {}
