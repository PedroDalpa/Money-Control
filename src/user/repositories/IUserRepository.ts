type User = {
  id: string
}

interface IUserRepository {
  findById(id: string): Promise<User | undefined>
}

export { IUserRepository, User }
