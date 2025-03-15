import React from 'react'

export default function Main({text,otherStyles}) {
  return (
    <h1 className={`font-montserrat font-extrabold text-4xl md:text-4xl lg:text-5xl ${otherStyles}`}>
      {text}
    </h1>
  )
}
