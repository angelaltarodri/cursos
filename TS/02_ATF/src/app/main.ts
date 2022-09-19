import {faker} from '@faker-js/faker';

import {addProduct, products, updateProduct, findProducts} from './products/product.service'

for (let index = 0; index < 50; index++) {
  addProduct({
    description:faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({min: 5, max: 126}),
    categoryId: faker.datatype.uuid()
  })
}
console.log(products)

const product = products[0];
updateProduct(product.id, {
  title: 'New Title',
  stock: 80,

})

findProducts({
  stock: 10,
  color: 'red',
  createdAt: new Date (), // no quiero omitir estos campos delicados, es solo un find.
  // tags:['summer']
})
