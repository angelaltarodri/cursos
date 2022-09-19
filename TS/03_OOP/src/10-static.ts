console.log(Math.PI)
console.log(Math.max(1,2,5,4,23,5))

class MyMath{
  static readonly PI = 3.14

  static max(...numbers:number[]){ //con rest params podemos convertir los argumentos en arrays
    return numbers.reduce((max, item) => max > item ? max: item)
  }
}

console.log(MyMath.PI)
// MyMath.PI = 121
console.log(MyMath.max(122,2,53,1223,54))
const numbers2 = [123, 43, 1, 32, -234, 2, 1234]
console.log(MyMath.max(...numbers2))
console.log(MyMath.max(-1, -9, -8))

