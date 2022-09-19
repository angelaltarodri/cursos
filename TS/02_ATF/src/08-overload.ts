// Nico -> [N, i, c, o] => string -> string[]
// y viceversa
// [N, i, c, o] -> Nico => string[] -> string

function parseStr(input:string | string[]): string | string[] {
  if(Array.isArray(input)){
    return input.join(''); //string // sin el '' saldra con comas ','
  } else {
    return input.split(''); //string[]
  }
}

const rtaArray = parseStr('Nico')
//rtaArray.reverse();
if(Array.isArray(rtaArray)){
  rtaArray.reverse();
}
const rtaStr = parseStr(['N', 'i', 'c', 'o'])
//rtaStr.toLowerCase();
if(typeof rtaStr == 'string'){
  rtaStr.toLowerCase();
}
console.log(rtaArray, rtaStr)
