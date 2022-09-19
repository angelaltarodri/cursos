import React from 'react'
import AuthProvider from '../components/authProvider'
import DashboardWrapper from '../components/dashboardWrapper'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useRef } from 'react'
import { getProfilePhotoUrl, setUserProfilePhoto, updateUser } from '../firebase/firebase'
import style from './editProfileView.module.css'
export default function editProfileView() {
  const navigate= useNavigate()
  const [currentUser, setCurrentUser] = useState({});
  const [state, setState] = useState(0);
  const [profileUrl, setProfileUrl] = useState(null)
  const fileRef = useRef()

  async function handleUserLoggedIn(user){
    setCurrentUser(user)
    const url = await getProfilePhotoUrl(user.profilePicture)
    setProfileUrl(url)
    setState(2)

  }
  function handleUserNotRegistered(user){
    navigate('/login')
  }
  function handleUserNotLoggedIn(){
    navigate('/login')
  }

  function handleOpenFilePicker(){
    if(fileRef.current){
      fileRef.current.click()
    }
  }
  function handleChangeFile(e){
    const files = e.target.files
    const fileReader = new FileReader();

    if(fileReader && files && files.length > 0){
      fileReader.readAsArrayBuffer(files[0])
      fileReader.onload = async function () {
        const imageData = fileReader.result

        const res = await setUserProfilePhoto(currentUser.uid, imageData)
        
        if(res){
          const tmpUser = {...currentUser}
          tmpUser.profilePicture = res.metadata.fullPath
          await updateUser(tmpUser)
          setCurrentUser({...tmpUser})
          const url = await getProfilePhotoUrl(currentUser.profilePicture)
          setProfileUrl(url)
        }
      }
    }
  }

  return (
    <AuthProvider 
    onUserLoggedIn={handleUserLoggedIn} 
    onUserNotLoggedIn={handleUserNotLoggedIn} 
    onUserNotRegistered={handleUserNotRegistered}>
      <DashboardWrapper>
        <div>
          <h2>Edit Profile Info</h2>
          <div className={style.profilePictureContainer}>
            <div>
              <img src={profileUrl} alt="profile picture" width={100}/>
            </div>
            <div>
              <button className='btn' onClick={handleOpenFilePicker}>Choose new profile picture</button>
              <input ref={fileRef} type="file" className={style.fileInput} onChange={handleChangeFile}/>
            </div>
          </div>
        </div>
      </DashboardWrapper>
    </AuthProvider>
  )
}
