import React, {useEffect} from 'react'
import './App.css'
import { collection, getDocs } from "firebase/firestore";
import db from './firebase/firebaseConfig'
export default function App() {
    useEffect(()=>{
        const obtenerDatos = async() => {
            const datos = await getDocs(collection(db, 'usuarios'))
            datos.forEach((documento) => {
                console.log(documento.data());
            })
        }
        obtenerDatos()
    },[])
    return (
        <div className="App">
            App
        </div>
    )
}
