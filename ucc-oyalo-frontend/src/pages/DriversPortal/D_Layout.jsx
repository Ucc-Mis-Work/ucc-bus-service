import React from 'react'
import { Outlet } from 'react-router-dom'
import DriverHeader from '../../component/DriverHeader'

export default function D_Layout() {
  return (
    <div className='flex flex-col h-screen'>
        <DriverHeader/>
        <div className='flex-1 h-full overflow-y-auto bg-gray-50'>
            <Outlet/>
        </div>

    </div>
  )
}
