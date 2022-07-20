import React, { useEffect } from 'react'

export default function Asynca() {

    const myPromiseOne = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('ASYNCA: Cargó la promesa UNO.');
          }, 1000);
        });
    }
    const myPromiseTwo = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('ASYNCA: Cargó la promesa DOS.');
          }, 3000);
        });
    }

    async function fetchPromise () {
        try {
            const uno = await myPromiseOne()
            const dos = await myPromiseTwo()
            console.log(uno) // espero a que se cargaran myPromiseOne y myPromiseTwo
            console.log(dos) // lo mismo que arriba
        } catch {
            console.log("Hubo un err")
        }
    }

    useEffect(()=>{
        fetchPromise()
    },[])

    return (
        <div>Asynca</div>
    )
}
