import { IUserRepository, User } from 'src/user/repositories/IUserRepository'

interface IResponse {
  user: User
}

interface IRequest {
  userId: string
}

class ValidateUserUseCase {
  constructor(private userRepository: IUserRepository) {}
  async execute({ userId }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findById(userId)

    if (!user) {
      throw new Error('Invalid user')
    }

    return { user }
  }
}

export { ValidateUserUseCase }
