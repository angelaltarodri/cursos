(()=>{
  // let myNumber: number
  // let myString: string

  let myNull: null = null
  let myUndefined: undefined = undefined

  let myNumber: number | null = null
  myNumber = 12

  let myString: string | undefined = undefined
  myString = 'sass'

  function hi (name: string | null){
    let hello = 'Hola '
    hello += name?.toLowerCase() || 'nadie'
    console.log(hello)
  }

  hi('nicolas')
  hi(null)

})()
