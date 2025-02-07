import { IUserRepository, User } from '../IUserRepository'

class InMemoryUserRepository implements IUserRepository {
  users: User[] = []
  async findById(id: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.id === id)

    return Promise.resolve(user)
  }
}

export { InMemoryUserRepository }
