(()=>{
  let userId: string | number
  userId = 1212
  userId = "asas"

  function greeting(myText: string | number) {
    if (typeof myText === "string") {
      console.log(myText.toLowerCase())
    } else {
      console.log(myText.toFixed(2))
    }
  }

  greeting('asa')
  greeting(1212.123)

})()
