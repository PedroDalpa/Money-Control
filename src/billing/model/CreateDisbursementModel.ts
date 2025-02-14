import { ICreateDisbursementDTO } from '../dtos/ICreateDisbursement'
import { differenceInDays } from 'date-fns'
import { BillingCategoriesEnum } from './BillingCategory.enum'

class CreateDisbursementModel {
  id: string
  accountId: string
  value: number
  description: string
  payDay: Date
  isPayed: boolean
  category: BillingCategoriesEnum

  constructor(props: ICreateDisbursementDTO) {
    Object.assign(this, {
      id: this.id ?? crypto.randomUUID(),
      ...props
    })

    this.verifyPaymentStatus()
    this.verifyMinDisbursementValue()
  }

  private verifyPaymentStatus() {
    const TODAY = new Date()
    const DAYS_TO_PAYMENT = 0
    if (differenceInDays(this.payDay, TODAY) > DAYS_TO_PAYMENT) {
      this.isPayed = false
    } else {
      this.isPayed = true
    }
  }

  private verifyMinDisbursementValue() {
    const MIN_BILLING_VALUE = 0
    if (this.value <= MIN_BILLING_VALUE) {
      throw new Error('Invalid disbursement value')
    }
  }
}

export { CreateDisbursementModel }
