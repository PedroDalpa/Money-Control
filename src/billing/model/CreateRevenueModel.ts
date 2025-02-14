import { ICreateRevenueDTO } from '../dtos/ICreateRevenue'
import { differenceInDays } from 'date-fns'
import { BillingCategoriesEnum } from './BillingCategory.enum'

class CreateRevenueModel {
  id: string
  accountId: string
  value: number
  description: string
  receivedAt: Date
  isReceived: boolean
  category: BillingCategoriesEnum

  constructor(props: ICreateRevenueDTO) {
    Object.assign(this, {
      id: this.id ?? crypto.randomUUID(),
      ...props
    })

    this.verifyPaymentStatus()
    this.verifyMinRevenueValue()
  }

  private verifyPaymentStatus() {
    const TODAY = new Date()
    const DAYS_TO_PAYMENT = 0
    if (differenceInDays(this.receivedAt, TODAY) > DAYS_TO_PAYMENT) {
      this.isReceived = false
    } else {
      this.isReceived = true
    }
  }

  private verifyMinRevenueValue() {
    const MIN_BILLING_VALUE = 0
    if (this.value <= MIN_BILLING_VALUE) {
      throw new Error('Invalid revenue value')
    }
  }
}

export { CreateRevenueModel }
