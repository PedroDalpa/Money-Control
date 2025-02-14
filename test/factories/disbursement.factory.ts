import { BillingCategoriesEnum } from '../../src/billing/model/BillingCategory.enum'
import { DisbursementModel } from '../../src/billing/model/DisbursementModel'
import { InMemoryDisbursementRepository } from '../../src/billing/repositories/inMemory/InMemoryDisbursementRepository'

type DisbursementFactoryProps = {
  props?: Partial<DisbursementModel>
  disbursementRepository: InMemoryDisbursementRepository
}

function DisbursementRepositoryFactory() {
  const disbursementRepository = new InMemoryDisbursementRepository()

  return disbursementRepository
}

function CreateDisbursementFactory({
  disbursementRepository,
  props
}: DisbursementFactoryProps) {
  const newDisbursement = new DisbursementModel(
    {
      accountId: props?.accountId ?? 'one',
      value: props?.value ?? 100,
      description: props?.description ?? 'teste',
      category: props?.category ?? BillingCategoriesEnum.fuel,
      payDay: props?.payDay ?? new Date()
    },
    props?.id
  )

  disbursementRepository.disbursements.push(newDisbursement)
}

export { DisbursementRepositoryFactory, CreateDisbursementFactory }
