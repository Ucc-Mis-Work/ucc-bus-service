import { Button } from '@mui/material'
import React from 'react'

export default function SeatButton({seatNumber,isSelected,isBooked,onClick}) {

    let className = 'p-2 flex items-center justify-center size-16 rounded-lg'

    if(isBooked){
        className += 'bg-green-400'
    }

    if(isSelected){
        className += 'bbbb'
    }


  return (
    <div className='mx-auto'>
            <button className={className}>
                {seatNumber}
            </button>

    </div>
  )
}
