import {Product} from './product.model'
//curioso como sin 'export' e 'import' ya estaba funcionando

export const products: Product[] = []

export const addProduct = (data:Product) => {
  products.push(data)
}

export const calcStock = (): number  => {
  let total = 0
  products.forEach(item => {
    total += item.stock
  })
  return total
}
