import React from 'react'

const CoreConcepts = ({ title, text, image }) => {
  return (
    <>
      <li>
      <img src={image} title={title}></img>
      <h1>{title}</h1>
      <p>{text}</p>
    </li>
    </>
  )
}

export default CoreConcepts
