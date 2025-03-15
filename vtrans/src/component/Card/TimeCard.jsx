import React from 'react'

export default function TimeCard({text}) {
  return (
    <div className='inline-block mr-1'>
        <h1 className='bg-blue-100 border-2 border-blue-300  rounded-md mb-2 p-[4px] text-center text-sm'>
            {text}
        </h1>
    </div>
  )
}
