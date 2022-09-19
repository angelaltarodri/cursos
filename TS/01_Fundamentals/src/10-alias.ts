(()=>{

  type UserID = string | number

  let userId: UserID

  //Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  let shirtSize : Sizes

  shirtSize = 'S'
  shirtSize = 'M'
  shirtSize = 'L'
  shirtSize = 'XL'
  // shirtSize = 'Angel'


  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === "string") {
      console.log(userId.toLowerCase())
    } else {
      console.log(userId.toFixed(2))
    }
  }

  greeting(1111, 'S')

})()
