import { ProductMemoryService } from './services/product-memory.service'

const productService = new ProductMemoryService();

productService.create({
  title: 'Producto 1',
  price: 100,
  description: 'blbalba blab bla lbla b la lbalblalbla b',
  categoryId: 123,
  images: []
})

const products = productService.getAll()
const productId = products[0].id
productService.update(productId, {
  title: 'Producto 2',
  price: 60,
  description: 'No es el mejor que tenemos.'
})

console.log(productService.findOne(productId))
