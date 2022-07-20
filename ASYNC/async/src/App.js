import React, { useEffect, useState } from 'react'
import './App.css';
import Emma from './Components/Emma'
import Asynca from './Components/Asynca'
// import {makeStyles} from '@material-ui/core'
function App() {
  
  const [urls, seturls] = useState("")

  const myPromiseFirst = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({name:"Emma Watson",url: 'https://i.pinimg.com/474x/58/ae/9b/58ae9b71e2f8333d0fcab62a7e64e763.jpg'});
      }, 500);
    });
  }
  const myPromiseTwo = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({name:"Anya Taylor-Joy", url: 'https://i.pinimg.com/474x/e4/2f/15/e42f15fa1a5e26d516e2243689be8127.jpg'});
      }, 1000);
    });
  } 
  const myPromiseThree = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({name:"Florence Pugh", url:'https://styles.redditmedia.com/t5_5xp842/styles/communityIcon_lhm4cbog5uk81.png'});
      }, 2000);
    });
  } 

  useEffect(()=>{
    Promise.allSettled([
      myPromiseFirst(),
      myPromiseTwo(),
      myPromiseThree(),
    ])
    .then(values => {
      const [
        {value: firstPromiseValue},
        {value: secondPromiseValue},
        {value: thirdPromiseValue},
      ] = values

      seturls([
        firstPromiseValue,
        secondPromiseValue,
        thirdPromiseValue,
      ])
    })
    
  },[])

  return (
    <div className="App">
      <h1>Promises</h1>
      {/* { urls ? urls.map(url =>{
        return <Emma url={url}/>
      }) 
      : "Cargando..."} */}
      <Asynca />
    </div>
  );
}

export default App;
