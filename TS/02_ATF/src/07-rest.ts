import {User, ROLES} from './01-enums'
const currentUser = {
  username: 'nicobytes',
  role: ROLES.CUSTOMER
}

export const checkAdminRole = ():boolean => {
  if (currentUser.role === ROLES.ADMIN){
    return true;
  }
  return false;
}

console.log(checkAdminRole())

export const checkRole = (role1:string, role2:string):boolean => {
  if (currentUser.role === role1){
    return true;
  }
  if(currentUser.role === role2){
    return true;
  }
  return false;
}

const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER)

console.log('checkRole',rta2)


export const checkRolev2 = (roles:string[]):boolean => {
  if (roles.includes(currentUser.role)){
    return true;
  }
  return false;
}

const rta3 = checkRolev2([ROLES.ADMIN, ROLES.SELLER])

console.log('checkRole v2',rta3)


export const checkRolev3 = (...roles:string[]):boolean => { // "..." rest params encapsula automaticamente en array los parametros
  if (roles.includes(currentUser.role)){
    return true;
  }
  return false;
}

const rta4 = checkRolev3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER)

console.log('checkRole v3',rta4)
