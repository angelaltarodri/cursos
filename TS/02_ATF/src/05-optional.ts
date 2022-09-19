export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true
    //el "false" hara que pase de frente al true por culpa del ||, ahora es
  }
}

// 0 === false
// '' === false
// false === false

const p1 = createProduct(1,false, 23)
console.log(p1)

const p2 = createProduct(45, false, 0)
console.log(p2)

const p3 = createProduct(45)
console.log(p3)

const num = 0
const valB = num ?? "default"

console.log(valB)

const myFunc = (a = 10) => { return a }

console.log(myFunc())
