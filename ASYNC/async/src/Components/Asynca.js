import React, { useEffect } from 'react'

export default function Asynca() {

    async function myPromiseOne () {
        try {
            throw new Error("Something Stupid")
            return new Promise((resolve, reject) => {
                setTimeout(resolve, 2000)
            }).then(()=>{
                return "UNO"
            })
        } catch(e) {
            console.log(e)
        }
    }
    async function myPromiseTwo () {
        try {
            return new Promise((resolve, reject) => {
                setTimeout(resolve, 1000)
            }).then(()=>{
                return "DOS"
            })
        } catch(e) {
            console.log(e)
        }
    }

    async function fetchPromise () {  
        // ASYNC AWAIT sequencial
        // console.time('Measuring Time')
        // const uno = await myPromiseOne()
        // const dos =  await myPromiseTwo()
        // console.timeEnd('Measuring Time')
        
        //ASYNC AWAIT paralela
        console.time('Measuring Time')
        const results = await Promise.all([myPromiseOne(),myPromiseTwo()])
        console.timeEnd('Measuring Time')

        // ASYNC AWAIT sequencial
        // console.log(uno) // espero a que se cargaran myPromiseOne y myPromiseTwo
        // console.log(dos) // lo mismo que arriba

        //ASYNC AWAIT paralela
        console.log('ONE returned ' + results[0])
        console.log('TWO returned ' + results[1])
    }

    useEffect(()=>{
        fetchPromise()
    },[])

    return (
        <div>Asynca</div>
    )
}
