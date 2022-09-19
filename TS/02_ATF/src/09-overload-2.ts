// Nico -> [N, i, c, o] => string -> string[]
// y viceversa
// [N, i, c, o] -> Nico => string[] -> string

export function parseStr(input: string):string[];
export function parseStr(input: string[]):string;
export function parseStr(input: number):string;


// export function parseStr(input:string | string[]): string | string[] { //export soluciona la dependencia de variables y repeticion
//   if(Array.isArray(input)){
//     return input.join(''); //string // sin el '' saldra con comas ','
//   } else {
//     return input.split(''); //string[]
//   }
// }

export function parseStr(input:unknown): unknown{ //export soluciona la dependencia de variables y repeticion
  if(Array.isArray(input)){
    return input.join(''); //string // sin el '' saldra con comas ','
  } else if(typeof input == "string"){
    return input.split(''); //string[]
  } else if(typeof input == "number"){
    return true;
  }
}

const rtaArray = parseStr('Nico')
rtaArray.reverse();

const rtaStr = parseStr(['N', 'i', 'c', 'o'])
rtaStr.toLowerCase();

console.log(rtaArray, rtaStr)

const rtaBool = parseStr(2341)
console.log(rtaBool)
