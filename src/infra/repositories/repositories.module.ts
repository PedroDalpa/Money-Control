import { Module } from '@nestjs/common'
import { DatabaseDisbursementRepository } from './disbursement.repository'
import { Disbursement } from '../entities/disbursement.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Revenue } from '../entities/revenue.entity'
import { DatabaseRevenueRepository } from './revenue.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Disbursement, Revenue])],
  providers: [DatabaseDisbursementRepository, DatabaseRevenueRepository],
  exports: [DatabaseDisbursementRepository, DatabaseRevenueRepository]
})
export class RepositoriesModule {}
