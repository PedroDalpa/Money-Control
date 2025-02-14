import { InMemoryDisbursementRepository } from '../../repositories/inMemory/InMemoryDisbursementRepository'
import { CreateDisbursementUseCase } from './CreateDisbursementUseCase'
import { ICreateDisbursementDTO } from '../../dtos/ICreateDisbursement'
import { BillingCategoriesEnum } from '../../model/BillingCategory.enum'

const now = new Date()
const futureDate = new Date(now)
futureDate.setDate(now.getDate() + 5)

const validDisbursement: ICreateDisbursementDTO = {
  accountId: 'account-id',
  value: 200,
  category: BillingCategoriesEnum.fuel,
  description: 'test',
  payDay: futureDate
}

describe('Create disbursement use case', () => {
  const inMemoryRepository = new InMemoryDisbursementRepository()

  it('Should be able create disbursement register', async () => {
    const useCase = new CreateDisbursementUseCase(inMemoryRepository)

    const { disbursement } = await useCase.execute(validDisbursement)

    expect(disbursement).toHaveProperty('id')
    expect(disbursement.isPayed).toEqual(false)
  })

  it('Should not be able create disbursement register with invalid value', async () => {
    const useCase = new CreateDisbursementUseCase(inMemoryRepository)
    const inValidBilling: ICreateDisbursementDTO = {
      ...validDisbursement,
      value: 0
    }
    await expect(useCase.execute(inValidBilling)).rejects.toThrow()
  })

  it('Should be able set isPayed as true if is payday', async () => {
    const useCase = new CreateDisbursementUseCase(inMemoryRepository)

    const pastBilling: ICreateDisbursementDTO = {
      ...validDisbursement,
      payDay: now
    }
    const { disbursement } = await useCase.execute(pastBilling)

    expect(disbursement.isPayed).toEqual(true)
  })
})
