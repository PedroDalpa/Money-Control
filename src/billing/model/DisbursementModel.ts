import { differenceInDays } from 'date-fns'
import { BillingCategoriesEnum } from './BillingCategory.enum'

class DisbursementModel {
  id: string
  accountId: string
  value: number
  description: string
  payDay: Date
  isPayed: boolean
  category: BillingCategoriesEnum

  constructor(props: Omit<DisbursementModel, 'id' | 'isPayed'>, id?: string) {
    Object.assign(this, {
      id: id ?? crypto.randomUUID(),
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

export { DisbursementModel }
