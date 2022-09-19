import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { auth, getUserInfo, registerNewUser, userExists } from '../firebase/firebase'

import { useNavigate } from 'react-router-dom'

export default function AuthProvider({
  children, 
  onUserLoggedIn, 
  onUserNotLoggedIn,
  onUserNotRegistered
}) {
  const navigate = useNavigate()
  
  useEffect(()=>{
    onAuthStateChanged(auth, async (user) => {
      if(user){
        const isRegistered = await userExists(user.uid);
        if(isRegistered){
          const userInfo = await getUserInfo(user.uid)
          console.log(userInfo)
          if( userInfo.processCompleted){
            onUserLoggedIn(userInfo)
          } else {
            onUserNotRegistered(userInfo)
          }
        } else {
          await registerNewUser({
            uid: user.uid,
            displayName: user.displayName,
            profilePicture: '',
            username: '',
            processCompleted: false
          })
          onUserNotRegistered(user)
        }
      } else {
        onUserNotLoggedIn()
      }
    })
  },[])
  
  return (
    <div>
        {children}
    </div>
  )
}
