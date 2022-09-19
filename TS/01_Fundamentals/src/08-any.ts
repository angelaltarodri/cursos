(()=>{

  let myDinamicVar: any
  myDinamicVar = 1000
  myDinamicVar = null
  myDinamicVar = {}
  myDinamicVar = ''

  myDinamicVar = 'HOla'
  const rta = (myDinamicVar as string).toLowerCase()
  console.log(rta)

  myDinamicVar = 1212
  const rta2 = (<number>myDinamicVar).toFixed(2)
  console.log(rta2)

})()
