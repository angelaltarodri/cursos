import React from 'react'

export default function Emma({url}) {

  return (
    <div>
      <h4>Aqui va {url.name}</h4>
      <img src={url.url} alt="" />
    </div>
  )
}
