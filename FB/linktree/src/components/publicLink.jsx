import React from 'react'
import style from './publicLink.module.css'
export default function PublicLink({url, title}) {
  return (
      <a className={style.publicLinkContainer} href={url}>
        <div>{title}</div>
      </a> 
  )
}
