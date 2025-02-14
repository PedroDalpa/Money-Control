import { InMemoryRevenueRepository } from '../../repositories/inMemory/InMemoryRevenueRepository'
import { CreateRevenueUseCase } from './CreateRevenueUseCase'
import { ICreateRevenueDTO } from '../../dtos/ICreateRevenue'
import { BillingCategoriesEnum } from '../../model/BillingCategory.enum'

const now = new Date()
const futureDate = new Date(now)
futureDate.setDate(now.getDate() + 5)

const validRevenue: ICreateRevenueDTO = {
  accountId: 'account-id',
  value: 200,
  category: BillingCategoriesEnum.fuel,
  description: 'test',
  receivedAt: futureDate
}

describe('Create revenue use case', () => {
  const inMemoryRepository = new InMemoryRevenueRepository()

  it('Should be able create revenue register', async () => {
    const useCase = new CreateRevenueUseCase(inMemoryRepository)

    const { revenue } = await useCase.execute(validRevenue)

    expect(revenue).toHaveProperty('id')
    expect(revenue.isReceived).toEqual(false)
  })

  it('Should not be able create revenue register with invalid value', async () => {
    const useCase = new CreateRevenueUseCase(inMemoryRepository)
    const inValidBilling: ICreateRevenueDTO = {
      ...validRevenue,
      value: 0
    }
    await expect(useCase.execute(inValidBilling)).rejects.toThrow()
  })

  it('Should be able set isReceived as true if is payday', async () => {
    const useCase = new CreateRevenueUseCase(inMemoryRepository)

    const pastBilling: ICreateRevenueDTO = {
      ...validRevenue,
      receivedAt: now
    }
    const { revenue } = await useCase.execute(pastBilling)

    expect(revenue.isReceived).toEqual(true)
  })
})
