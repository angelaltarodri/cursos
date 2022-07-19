import React, { useEffect, useState } from 'react'

export default function Promises() {

  const [url, seturl] = useState("")

  const emma = (url) => {
    return <img src={url} alt="" />
  }

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('https://i.pinimg.com/474x/58/ae/9b/58ae9b71e2f8333d0fcab62a7e64e763.jpg');
    }, 1000);
  });
  useEffect(()=>{
    myPromise.then(res=>{
      console.log(res)
      return res
    }).then(res=>{
      setTimeout(() => {
        seturl(res)
      }, 1000)
    }).catch(err=>{
      console.log(err)
    })
  },[])
  return (
    <div>
      <h3>Promises</h3>
      <div>
        {emma(url)}
      </div>
    </div>
  )
}
