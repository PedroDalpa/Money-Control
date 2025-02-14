import { ICreateRevenueDTO } from '../dtos/ICreateRevenue'
import { differenceInDays } from 'date-fns'
import { BillingCategoriesEnum } from './BillingCategory.enum'

class RevenueModel {
  id: string
  accountId: string
  value: number
  description: string
  receivedAt: Date
  isReceived: boolean
  category: BillingCategoriesEnum

  constructor(
    props: Omit<ICreateRevenueDTO, 'id' | 'isReceived'>,
    id?: string
  ) {
    Object.assign(this, {
      id: id ?? crypto.randomUUID(),
      ...props
    })

    this.verifyReceivedStatus()
    this.verifyMinRevenueValue()
  }

  private verifyReceivedStatus() {
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

export { RevenueModel }
