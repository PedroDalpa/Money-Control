class AccountModel {
  id: string
  initialValue: number

  constructor(props: Omit<AccountModel, 'id'>, id?: string) {
    Object.assign(this, {
      id: id ?? crypto.randomUUID(),
      ...props
    })
  }
}

export { AccountModel }
