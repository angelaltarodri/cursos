import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { auth, userExists } from '../firebase/firebase'
import AuthProvider from '../components/authProvider';
import style from './loginView.module.css'
import { useNavigate } from 'react-router-dom'

export default function loginView() {

  const navigate= useNavigate()
  // const [currentUser, setCurrentUser] = useState(null);
  /*
  State
  0: inicializando
  1: loading
  2: login completo
  3: login pero sin registro
  4: no hay nadie logueado
  5: ya existe el username
  6: nuevo username, click para continuar
  7: username no existe
  */
  const [state, setCurrentState] = useState(0);

  // useEffect(()=>{
  //   setCurrentState(1);
  //   onAuthStateChanged(auth, async (user) => {
  //     if(user){
  //       const isRegistered = await userExists(user.uid);
  //       if(isRegistered){
  //         //to do: redirigir a dashboard
  //         navigate("/dashboard")
  //         setCurrentState(2)
  //       } else {
  //         //to do: redirigir a choose username
  //         navigate("/choose-username")
  //         setCurrentState(3)
  //       }
  //     } else {
  //       setCurrentState(4)
  //       console.log("No hay nadie autenticado.")
  //     }
  //   })
  // },[])

  async function handleOnClick(){
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);

    async function signInWithGoogle(googleProvider) {
      try{
        const res = await signInWithPopup(auth, googleProvider);
        console.log(res)
      } catch(e) {
        console.error(e);
      }
    }
  }

  function handleUserLoggedIn(user){ 
    navigate('/dashboard')
  }
  function handleUserNotRegistered(user){
    navigate('/choose-username')
  }
  function handleUserNotLoggedIn(){
    setCurrentState(4)
  }


  // if(state == 2){
  //   return <div>Estás autenticado pero no registrado</div>
  // } 

  // if(state == 3){
  //   return <div>Estás autenticado pero no registrado</div>
  // } 

  if(state == 4){
    return (
      <div className={style.loginView} >
        <div>
          <h1>Link Tree by Angel Altamirano</h1>
        </div>
        <button onClick={handleOnClick} className={style.provider}>Login with Google</button>
      </div>
    )
  } 
  

  return <AuthProvider 
    onUserLoggedIn={handleUserLoggedIn}
    onUserNotRegistered={handleUserNotRegistered}
    onUserNotLoggedIn={handleUserNotLoggedIn}
    >
      <div>Loading...</div>
  </AuthProvider>
}
