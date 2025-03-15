import React from 'react'

export default function OyaloBackground() {
  return (
    <div className='h-full w-full overflow-hidden fixed opacity-5 bg-gray-200'>
        <div className='h-full relative'>
            {
                [...Array(9)].map((_,index)=>(
                    <div className='flex overflow-hidden whitespace-nowrap' key={index}>
                        <h1 className='text-9xl min-w-max font-bold text-primary inline-flex'>OYALO...</h1>
                        <h1 className='text-9xl min-w-max font-bold text-primary inline-flex'>OYALO...</h1>
                        <h1 className='text-9xl min-w-max font-bold text-gray-600 inline-flex'>OYALO...</h1>
                        <h1 className='text-9xl min-w-max font-bold text-gray-600 inline-flex'>OYALO...</h1>
                        <h1 className='text-9xl min-w-max font-bold text-gray-600 inline-flex'>OYALO...</h1>
                        <h1 className='text-9xl min-w-max font-bold text-gray-600 inline-flex'>OYALO...</h1>
                    </div>

                ))
            }
        </div>
    </div>
  )
}
