import { BillingCategoriesEnum } from '../model/BillingCategory.enum'

type ICreateDisbursementDTO = {
  accountId: string
  value: number
  description: string
  payDay: Date
  category: BillingCategoriesEnum
}

export { ICreateDisbursementDTO }
