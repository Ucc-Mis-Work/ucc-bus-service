import React from 'react'
import Subs from '../../typo/Subs'
import Mintitle from '../../typo/Mintitle'

export default function CardTag({head,value}) {
  return (
    <div>
        <h1
            className='text-gray-700 text-sm mb-1'
        >{head}</h1>
        <Subs
            text={value}
        />
      
    </div>
  )
}
