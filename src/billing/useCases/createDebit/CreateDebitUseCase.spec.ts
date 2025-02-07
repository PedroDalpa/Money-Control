import { InMemoryUserRepository } from '../../../user/repositories/inMemory/InMemoryUserRepository'
import { InMemoryAccountRepository } from '../../../account/repositories/inMemory/InMemoryAccountRepository'
import { InMemoryBillingRepository } from '../../repositories/inMemory/InMemoryBillingRepository'
import { CreateDebitUseCase } from './CreateDebitUseCase'

describe('Create debit use case', () => {
  const inMemoryRepository = new InMemoryBillingRepository()
  const inMemoryAccountRepository = new InMemoryAccountRepository()
  inMemoryAccountRepository.accounts = [{ id: 'account-id' }]
  const inMemoryUserRepository = new InMemoryUserRepository()
  inMemoryUserRepository.users = [{ id: 'user-id' }]

  it('Should be able create debit register', async () => {
    const useCase = new CreateDebitUseCase(
      inMemoryRepository,
      inMemoryAccountRepository,
      inMemoryUserRepository
    )

    const result = await useCase.execute({
      accountId: 'account-id',
      userId: 'user-id',
      value: 200
    })

    expect(result).toHaveProperty('id')
  })

  it('Should not be able create debit register with invalid value', async () => {
    const useCase = new CreateDebitUseCase(
      inMemoryRepository,
      inMemoryAccountRepository,
      inMemoryUserRepository
    )

    await expect(
      useCase.execute({
        accountId: 'account-id',
        userId: 'user-id',
        value: 0
      })
    ).rejects.toThrow()
  })

  it('Should not be able create debit register with invalid count id', async () => {
    const useCase = new CreateDebitUseCase(
      inMemoryRepository,
      inMemoryAccountRepository,
      inMemoryUserRepository
    )

    await expect(
      useCase.execute({
        accountId: 'fake-id',
        userId: 'user-id',
        value: 10
      })
    ).rejects.toThrow()
  })

  it('Should not be able create debit register with invalid user id', async () => {
    const useCase = new CreateDebitUseCase(
      inMemoryRepository,
      inMemoryAccountRepository,
      inMemoryUserRepository
    )

    await expect(
      useCase.execute({
        accountId: 'account-id',
        userId: 'fake-id',
        value: 10
      })
    ).rejects.toThrow()
  })
})
