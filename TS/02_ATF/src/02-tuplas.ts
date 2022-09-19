const prices:(number | string)[] = [1,2,4,42,43,4, 'as']
prices.push(1)
prices.push('asfas')

let user:[string, number]
user = ['nicobytes', 12]
user = ['12',14]
//unicamente admite ese orden 'string' y 'number'
user = ['A a 4', 23]

const [username, age] = user
console.log(username)
console.log(age)
