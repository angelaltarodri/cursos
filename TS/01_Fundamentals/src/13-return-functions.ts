(()=>{
  const calcTotal = (prices:number[]): string => {
    let total = 0
    prices.forEach(item=>{
      total += item
    })
    return total.toString()
  }

  const rta = calcTotal([1,24,4,53])
  console.log(typeof rta)

  const printTotal = (prices: number[]):void => {
    const rta = calcTotal(prices)
    console.log(`El total es ${rta}`)
  }
})()
