type Account = {
  id: string
}

interface IAccountRepository {
  findById(id: string): Promise<Account | undefined>
}

export { IAccountRepository, Account }
