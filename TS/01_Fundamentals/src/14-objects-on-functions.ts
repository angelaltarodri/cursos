(()=>{
  const login = (data:{email:string, password:number}) => {
    console.log(data.email, data.password)
  }

  // login('nico@gmail.com', '12121212')
  login({
    email:'nico@nico.com',
    password: 312312132
  })

  type Sizes = 'S' | 'M' | 'L' | 'XL'

  const products: any[] = []

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data)
  }

  addProduct({
    title:'Pro1',
    createdAt: new Date,
    stock: 12,
  })

  addProduct({
    title:'Pro2',
    createdAt: new Date,
    stock: 24,
    size: 'M'
  })

  console.log(products)

})()
