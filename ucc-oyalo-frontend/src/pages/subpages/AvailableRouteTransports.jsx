import React from 'react'
import Title from '../../typo/Title'
import Subs from '../../typo/Subs'
import { Button } from '@mui/material'
import TimeCard from '../../component/Card/TimeCard'
import RouteCard from '../../component/Card/RouteCard'

export default function AvailableRouteTransports() {
  return (
    <div className='adjust mb-5 h-[70%] overflow-y-auto'>
      <Title
        text={'Available Routes'}
        otherStyles={'mb-2'}
      />
      <Subs
        text={'Browse available routes'}
        otherStyles={'mb-10'}
      />

      <table className='border-2 rounded-xl overflow-hidden w-full text-sm border-gray-100 hidden'> 
        <thead className='bg-gray-200 text-medium'>
            <tr>
                <th className='font-medium'>Traveling From</th>
                <th className='font-medium'>Traveling To</th>
                <th className='font-medium'>Trip Type</th>
                <th className='font-medium'>Schedule</th>
                <th className='font-medium'>Price</th>
                <th className='font-medium'></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className='font-medium'>UCC Campus</td>
                <td>Accra</td>
                <td>Schedule</td>
                <td className='text-left'>
                    {/* day */}
                    <h1 className='font-semibold text-gray-500 mb-2'>Monday</h1>
                    <TimeCard
                        text={'8:00am'}
                    />
                    <TimeCard
                        text={'8:00am'}
                    />
                    <TimeCard
                        text={'8:00am'}
                    />
                </td>
                <td className='text-gray-700'>130.00</td>
                <td>
                    <Button variant='contained' sx={{p:2}}>
                        Book Ticket
                    </Button>
                </td>
            </tr>
        </tbody>
      </table>

      <div>
        <RouteCard/>
        <RouteCard/>
        <RouteCard/>
        <RouteCard/>
        <RouteCard/>
        <RouteCard/>
        <RouteCard/>
        <RouteCard/>
        <RouteCard/>
      </div>
    </div>
  )
}
