import { Module } from '@nestjs/common'
import { DatabaseDisbursementRepository } from './disbursement.repository'
import { Disbursement } from '../entities/disbursement.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Disbursement])],
  providers: [DatabaseDisbursementRepository],
  exports: [DatabaseDisbursementRepository]
})
export class RepositoriesModule {}
