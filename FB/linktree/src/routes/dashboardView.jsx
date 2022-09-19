import React from 'react'
import AuthProvider from '../components/authProvider'
import { useNavigate } from 'react-router-dom'
import Link from '../components/link'
import { useState } from 'react';
import DashboardWrapper from '../components/dashboardWrapper';
import {v4 as uuidv4} from 'uuid';
import { deleteLink, getLinks, insertNewLink, updateLink } from '../firebase/firebase';
import style from './dashboardView.module.css'
import styleLinks from '../components/link.module.css'

export default function dashboardView() {
  const navigate= useNavigate()
  const [currentUser, setCurrentUser] = useState({});
  const [state, setState] = useState(0);

  const [title, settitle] = useState("")
  const [url, seturl] = useState("")
  const [links, setlinks] = useState([])

  async function handleUserLoggedIn(user){
    setCurrentUser(user)
    setState(2)
    const resLinks = await getLinks(user.uid)
    setlinks([...resLinks])
  }
  function handleUserNotRegistered(user){
    navigate('/login')
  }
  function handleUserNotLoggedIn(){
    navigate('/login')
  }

  if(state==0){
    return ( 
      <AuthProvider 
      onUserLoggedIn={handleUserLoggedIn}
      onUserNotRegistered={handleUserNotRegistered}
      onUserNotLoggedIn={handleUserNotLoggedIn}
      >
        Loading...
      </AuthProvider>
    )
  }

  function handleOnSubmit(e) {
    e.preventDefault()
    addLink();
  }

  function addLink() {
    if(title !== '' && url !== ''){
      const newLink = {
        id: uuidv4(),
        title: title,
        url: url,
        uid: currentUser.uid,
      }
      const res = insertNewLink(newLink);
      newLink.docId = res.id
      settitle('')
      seturl('')
      setlinks([...links, newLink])

    }
  }

  async function handleDeleteLink(docId){
    await deleteLink(docId)
    const tmp = links.filter(link => link.docId !== docId)
    setlinks([...tmp])
  }
  async function handleUpdateLink(docId, title, url){
    const link = links.find(item => item.docId == docId)
    link.title = title
    link.url = url
    await updateLink(docId, link)
  }
  return <DashboardWrapper>
    <div>
      <h1>Dashboard</h1>

      <form className={style.entryContainer} action="" onSubmit={handleOnSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" onChange={(e) => {settitle(e.target.value)}} />

        <label htmlFor="url">Url</label>
        <input type="text" name="url" onChange={(e) => {seturl(e.target.value)}} />

        <input type="submit" name="url"  value="Create new link" className="btn"/>
      </form>
      <div className={styleLinks.linksContainer}>
        {
          links.map(link => (
            <Link 
            key={link.docId} 
            docId={link.docId}
            url={link.url} 
            title={link.title} 
            onDelete={handleDeleteLink} 
            onUpdate={handleUpdateLink}/>
          ))
        }
      </div>
    </div>
  </DashboardWrapper>
}
