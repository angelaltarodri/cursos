import React, { useEffect } from 'react'
import './App.css'
import {useNavigate} from 'react-router-dom'
export default function App() {
  const navigate= useNavigate()
  useEffect(()=>{
    navigate('/login')
  },[])
  return (
    <div className="App">
      App
    </div>
  )
}
