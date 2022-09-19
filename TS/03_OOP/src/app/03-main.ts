import { ProductHttpService } from './services/product-http.service'

(async()=>{
  const productService = new ProductHttpService(); // que tal si a estos servicios le creo el Singleton
  try {
    console.log('---'.repeat(10))
    const products = await productService.getAll()
    console.log(products.length)
    // console.log(products.map(item => item.price))
    console.log('---'.repeat(10))
    const productId = products[0].id
    // await productService.update(productId,{
    //   price: 10000,
    //   title: 'Nuevo titulo',
    //   description: 'New description'
    // })
    const product = await productService.findOne(productId)
    console.log(product)
  } catch (error) {
    console.log('Hubo un error')
  }

})()

