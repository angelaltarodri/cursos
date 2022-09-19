import { addProduct, calcStock, products} from './product.service'

addProduct({
  title: 'Pro1',
  createdAt: new Date(1993, 1, 1),
  stock: 5,
})

addProduct({
  title:'Pro2',
  createdAt: new Date(2022,2,1),
  stock: 10,
  size: 'M'
})
console.log(products)
const total = calcStock()
console.log(total)
