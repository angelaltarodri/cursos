export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}

export type User = {
  username: string,
  role: ROLES
}

export const nicoUser: User = {
  username: 'nicobytes',
  role: ROLES.ADMIN
}
