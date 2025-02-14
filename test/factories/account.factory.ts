import { AccountModel } from '../../src/account/model/AccountModel'
import { InMemoryAccountRepository } from '../../src/account/repositories/inMemory/InMemoryAccountRepository'

type AccountFactoryProps = {
  props?: Partial<AccountModel>
  accountRepository: InMemoryAccountRepository
}

function AccountRepositoryFactory() {
  const accountRepository = new InMemoryAccountRepository()

  return accountRepository
}

function CreateAccountFactory({
  accountRepository,
  props
}: AccountFactoryProps) {
  const newAccount = new AccountModel(
    { initialValue: props?.initialValue ?? 0 },
    props?.id
  )

  accountRepository.accounts.push(newAccount)
}

export { AccountRepositoryFactory, CreateAccountFactory }
