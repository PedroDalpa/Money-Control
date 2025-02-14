import { Module } from '@nestjs/common'
import { TypeOrmConfigModule } from './infra/config/typeorm.module'
import { BillingModule } from './billing/billing.module'

@Module({
  imports: [TypeOrmConfigModule, BillingModule],
  controllers: []
})
export class AppModule {}
