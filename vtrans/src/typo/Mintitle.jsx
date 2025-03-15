import React from 'react'

export default function Mintitle({text,otherStyles}) {
  return (
    <h1 className={`font-montserrat font-medium text-lg text-gray ${otherStyles}`}>
      {text}
    </h1>
  )
}
