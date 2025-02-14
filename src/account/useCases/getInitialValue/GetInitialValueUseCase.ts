import { Inject, Injectable } from '@nestjs/common'
import { IAccountRepository } from '../../repositories/IAccountRepository'

type IRequest = {
  id: string
}

@Injectable()
class GetInitialValue {
  constructor(
    @Inject('IAccountRepository')
    private accountRepository: IAccountRepository
  ) {}

  async execute({ id }: IRequest): Promise<{ initialValue: number }> {
    const { initialValue } = await this.accountRepository.getInitialValue(id)
    return { initialValue }
  }
}

export { GetInitialValue }
