import React, { useEffect, useState } from 'react'
import SeatButton from '../component/button/SeatButton'

export default function SeatButtonTest() {
    const [selected,setselected] = useState([])
    const sd = [
        {
            no:1,
            status:'available'
        },
        {
            no:2,
            status:'booked'
        },
        {
            no:3,
            status:'booked'
        },
        {
            no:4,
            status:'available'
        },
    ]

    const [seats,setseats] = useState([])

     const seatlistings = ()=>{
            let generatedseats = []

            sd.forEach(element => {
                generatedseats.push(
                    <SeatButton
                        seatNumber={element.no}
                    />
                )
            });

            setseats(generatedseats)
    }

    useEffect(()=>{
        seatlistings()
    },[selected])

  return (
    <div className='flex items-center justify-center h-screen flex-col gap-10'>
        {/* <div className='flex gap-2 font-semibold'>
            {
                selected.map((st,index)=>(
                    <h1 key={index}>{st.no},</h1>
                ))
            }
        </div> */}
        <div className='grid grid-cols-4 gap-4'>
            {seats}
        </div>
    </div>
  )
}
