import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import PublicLink from '../components/publicLink'
import { existsUsername, getProfilePhotoUrl, getUserPublicProfileInfo } from '../firebase/firebase'
import style from './publicProfileView.module.css'
import stylePublicLinks from '../components/publicLink.module.css'
export default function publicProfileView() {

  const params = useParams()
  const [profile, setProfile] = useState(null)
  const [url, setUrl] = useState(null)
  const [state, setState] = useState(0)

  useEffect(() => {
    getProfile()
    async function getProfile() {
      const username = params.username
      try {
        const userUid = await existsUsername(username)
        if(userUid) {
          const userInfo = await getUserPublicProfileInfo(userUid)
          setProfile(userInfo)
          const url = await getProfilePhotoUrl(userInfo.profileInfo.profilePicture)
          setUrl(url)
        } else {
          setState(7)
        }
      } catch (error) {
        console.error(error)
      }
    }
  }, [params])
  
  if(state == 7) {
    return <div>
      <h1>Username doesn't exist.</h1>
    </div>
  }

  return (
    <div className={style.profileContainer}>
      <div className={style.profilePicture}>
        <img src={url} alt="" width={200}/>
      </div>
      {
        profile ? 
        <div>
          <h2>{profile.profileInfo.username}</h2>
          <h3>{profile.profileInfo.displayName}</h3>
          <div className={stylePublicLinks.publicLinksContainer}>
            {profile.linksInfo.map(link => (
              <PublicLink key={link.docId} url={link.url} title={link.title} />
            ))}
          </div>
        </div> : <div>Loading...</div>
      }
    </div>
  )
}
