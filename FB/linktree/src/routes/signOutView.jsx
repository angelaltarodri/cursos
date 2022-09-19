import { logOut } from '../firebase/firebase'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import AuthProvider from '../components/authProvider'

export default function signOutView() {
  const navigate = useNavigate()
  async function handleUserLoggedIn(user){
    await logOut()
  }
  function handleUserNotRegistered(user){
    navigate('/login')
  }
  function handleUserNotLoggedIn(){
    navigate('/login')
  }

  return (
    <AuthProvider 
    onUserLoggedIn={handleUserLoggedIn} 
    onUserNotLoggedIn={handleUserNotLoggedIn} 
    onUserNotRegistered={handleUserNotRegistered}>


    </AuthProvider>
  )
}
