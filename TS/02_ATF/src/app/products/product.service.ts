import {Product} from './product.model'
import {Id} from '../base.model'
import {faker} from '@faker-js/faker';
import { CreateProductDto, UpdateProductDto, FindProductDto} from './product.dto';

export const products: Product[] = [];

const getIndex = (id: Id) => products.findIndex(product => product.id === id)
const throwError = (error:string) => new Error(error)

export const addProduct = (data:CreateProductDto): Product => {
  const newProduct = { // esto se tendria que hacer desde el backend, solo por ahora lo simularemos
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category:{
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
    updatedAt: faker.date.recent()
    }
  }

  products.push(newProduct)
  return newProduct
}

export const updateProduct = (id:Product['id'], changes: UpdateProductDto): Product => {
  const index: number = getIndex(id)
  const product: Product = products[index]
  index === -1 && throwError('Product not Found')

  products[index] = {
    ...product,
    ...changes
  }

  return products[index]
}

export const deleteProduct = (id:string) =>{
  const index:number = getIndex(id)
  index === -1 && throwError('Product not Found')

  products.splice(index, 1)
  return id
}

// export const findProduct = (id:Id) => {
//   const index:number = getIndex(id)
//   index === -1 && throwError('Product not Found')

//   return products [index]
// }

export const findProducts = (dto:FindProductDto):Product[] => {
  //code
  // dto.color = 'blue' //ya no tiene efecto en tanto es solo lectura
  // dto.tags = []
  // dto.tags?.pop() //si puede hacer pop, entonces debe ser ReadonlyArray
  // dto.tags?.push() // lo mismo aqui
  return products
}
