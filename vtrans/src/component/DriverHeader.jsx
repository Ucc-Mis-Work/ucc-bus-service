import { Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function DriverHeader() {
  return (
    <div className='backdrop-blur-md p-2 sticky top-0 z-20 shadow-xl bg-primary text-white'>
        <div className='flex items-center justify-between adjust p-2'>
            <Link to={'main'}>
                <h1 className='font-bold text-lg'>Oyalo...🚌</h1>
            </Link>

            {/* TODO:Driver Avatar */}
            <Avatar/>
        </div>

    </div>
  )
}
