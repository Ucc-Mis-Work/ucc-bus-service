import React from 'react'
import OyaloBackground from '../component/OyaloBackground'

export default function NotFound() {
  return (
    <div className='flex items-center justify-center h-screen w-full'>
        <OyaloBackground/>
        <div className='text-center relative'>
            <h1 className='text-xl md:text-4xl lg:text-9xl font-poppins font-bold'>404</h1>
            <p className='text-3xl font-montserrat font-semibold text-gray-500'>Oyalo Page Not Found</p>
        </div>
    </div>
  )
}
