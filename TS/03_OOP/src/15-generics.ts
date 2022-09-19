import {Dog} from './09-protected'
// function getValue(value:unknown){
//   return value
// }

import axios from "axios"

// function getValue(value: number | string){
//   return value
// }

function getValue<T>(value: T){
  const array: T[] = [value]
  return value
}

getValue<number>(12).toFixed()
getValue<string>('12').toLowerCase()
// getValue<number[]>([12,14,15,'17']).forEach
const fifi = new Dog('fifi', 'Daniel')
getValue<Dog>(fifi).move()
// Promise<boolean>
// axios.get<string[]>
