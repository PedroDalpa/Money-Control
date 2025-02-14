import { BillingCategoriesEnum } from '../../src/billing/model/BillingCategory.enum'
import { RevenueModel } from '../../src/billing/model/RevenueModel'
import { InMemoryRevenueRepository } from '../../src/billing/repositories/inMemory/InMemoryRevenueRepository'

type RevenueFactoryProps = {
  props?: Partial<RevenueModel>
  revenueRepository: InMemoryRevenueRepository
}

function RevenueRepositoryFactory() {
  const revenueRepository = new InMemoryRevenueRepository()

  return revenueRepository
}

function CreateRevenueFactory({
  revenueRepository,
  props
}: RevenueFactoryProps) {
  const newRevenue = new RevenueModel(
    {
      accountId: props?.accountId ?? 'one',
      value: props?.value ?? 100,
      description: props?.description ?? 'teste',
      category: props?.category ?? BillingCategoriesEnum.fuel,
      receivedAt: props?.receivedAt ?? new Date()
    },
    props?.id
  )

  revenueRepository.revenues.push(newRevenue)
}

export { RevenueRepositoryFactory, CreateRevenueFactory }
