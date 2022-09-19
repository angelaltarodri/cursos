import axios from 'axios'

(async ()=> {
  // function delay(time:number) {
  //   const promise = new Promise<boolean>((resolve,reject) =>{
  //     setTimeout(() =>{
  //       resolve(true)
  //     }, time)
  //   })
  //   return promise
  // }
  // console.log('---'.repeat(10))
  // const rta = await delay(1000)
  // console.log(rta)

  function getProducts(){
    const promise = axios.get('https://api.escuelajs.co/api/v1/products')
    return promise
  }

  async function getProductsAsync(){
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products')
    return rta.data
  }

  console.log('---'.repeat(10))
  const products = await getProducts()
  console.log(products.data)
  console.log('---'.repeat(10))
  const products2 = await getProductsAsync()
  console.log(products2)

})()
