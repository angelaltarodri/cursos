export const createProduct = (
  id: string | number,
  isNew: boolean = true, // <---
  stock: number = 10 // <---
) => {
  return {
    id,
    stock: stock,
    isNew: isNew
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
