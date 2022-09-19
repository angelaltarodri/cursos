import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import style from './link.module.css'

export default function Link({docId, title, url, onDelete, onUpdate}) {

    const [currentTitle, setCurrentTitle] = useState(title)
    const [currentUrl, setCurrentUrl] = useState(url)

    const [editTitle, setEditTitle] = useState(false)
    const [editUrl, setEditUrl] = useState(false)

    const titleRef = useRef(null)
    const urlRef = useRef(null)

    useEffect(()=>{
        if(titleRef.current){
            titleRef.current.focus()
        }
    },[editTitle])

    useEffect(()=>{
        if(urlRef.current){
            urlRef.current.focus()
        }
    },[editUrl])
    
    function handleEditTitle () {
        setEditTitle(true)
    }

    function handleEditUrl () {
        setEditUrl(true)
    }

    function handleBlurTitle (e) {
        setEditTitle(false)
        onUpdate(docId, currentTitle, currentUrl)
    }
    function handleBlurUrl (e) {
        setEditUrl(false)
        onUpdate(docId, currentTitle, currentUrl)
    }
    function handleDelete(){
        onDelete(docId)
    }

    return (
        <div className={style.link}>
            <div className={style.linkInfo}>
                <div className={style.linkTitle}> 
                    {
                        editTitle == true ? 
                            <input 
                            ref={titleRef} 
                            type="text" 
                            value={currentTitle} 
                            onChange={(e)=>{setCurrentTitle(e.target.value)}}
                            onBlur={handleBlurTitle}
                            />
                        :
                        <>
                            <button className={style.btnEdit} onClick={handleEditTitle}>
                                <span className='material-icons'>edit</span>
                            </button> 
                            {currentTitle}
                        </>
                    }
                </div>
                <div className={style.linkUrl}> 
                    {
                        editUrl == true ?
                            <input 
                            ref={urlRef} 
                            type="text" 
                            value={currentUrl} 
                            onChange={(e)=>{setCurrentUrl(e.target.value)}}
                            onBlur={handleBlurUrl}
                            />
                        : <>
                            <button className={style.btnEdit} onClick={handleEditUrl}>
                                <span className='material-icons'>edit</span>
                            </button> 
                            {currentUrl}
                        </>
                    }
                </div>
            </div>
            <div className={style.linkActions}>
                <button className={style.btnDelete} onClick={handleDelete}>
                    <span className='material-icons'>delete</span>
                </button> 
            </div>
        </div>
    )
}
