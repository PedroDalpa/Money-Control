import { BillingCategoriesEnum } from '../model/BillingCategory.enum'

type ICreateRevenueDTO = {
  accountId: string
  value: number
  description: string
  receivedAt: Date
  category: BillingCategoriesEnum
}

export { ICreateRevenueDTO }
