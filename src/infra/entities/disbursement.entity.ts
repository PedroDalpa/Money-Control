import { BillingCategoriesEnum } from 'src/billing/model/BillingCategory.enum'
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn
} from 'typeorm'

@Entity()
class Disbursement {
  @PrimaryColumn()
  id: string
  @Column()
  accountId: string
  @Column()
  value: number
  @Column()
  description: string
  @Column()
  payDay: Date
  @Column()
  isPayed: boolean
  @Column()
  category: BillingCategoriesEnum
  @CreateDateColumn()
  createdAt: Date
  @UpdateDateColumn()
  updatedAt: Date
}

export { Disbursement }
