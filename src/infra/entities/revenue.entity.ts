import { BillingCategoriesEnum } from 'src/billing/model/BillingCategory.enum'
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn
} from 'typeorm'

@Entity()
class Revenue {
  @PrimaryColumn()
  id: string
  @Column()
  accountId: string
  @Column()
  value: number
  @Column()
  description: string
  @Column()
  receivedAt: Date
  @Column()
  isReceived: boolean
  @Column()
  category: BillingCategoriesEnum
  @CreateDateColumn()
  createdAt: Date
  @UpdateDateColumn()
  updatedAt: Date
}

export { Revenue }
