(()=>{
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  type Careers = 'Engineering' | 'Programming' | 'Economy' | 'Psychiatry' | 'Gastronomy' | 'Publicity'
  type User =  {
    name: string,
    createdAt: Date
    age: number
    career: Careers
    size?: Sizes
  }

  const users: User[] = []

  const addUser = (data: User) => {
    users.push(data)
  }

  addUser({
    name: 'Angel',
    createdAt: new Date,
    age: 26,
    career: 'Programming',
    size: 'L'
  })

  addUser({
    name: 'Margorie',
    createdAt: new Date,
    age: 24,
    career: 'Economy',
    size: 'S'
  })


  users.push({
    name: 'Daniel',
    createdAt: new Date,
    age: 27,
    career: 'Publicity',
    size: 'L'
  })

  console.log(users)
})()
