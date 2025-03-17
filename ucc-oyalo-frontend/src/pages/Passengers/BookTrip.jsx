import React from 'react'
import Title from '../../typo/Title'
import { Divider, InputAdornment, TextField } from '@mui/material'
import { Footprints, Search } from 'lucide-react'
import RouteCard from '../../component/Card/RouteCard'

export default function BookTrip() {
  return (
    <div className='adjust py-10 px-3 h-full overflow-hidden pb-28'>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <Title
            text={'Book A Trip'}
            otherStyles={'text-primary'}
          />
          <p>Description</p>
        </div>
        <div className='w-full md:w-[40%]'>
          <TextField
            fullWidth
            InputProps={{
              startAdornment:(
                <InputAdornment position='start'>
                  <Search className='text-primary'/>
                </InputAdornment>
              )
            }}
            placeholder='SEARCH FOR YOUR TRIP'
          />
        </div>
      </div>
      <Divider sx={{my:2}}/>

      <div className="grid lg:grid-cols-10 h-full">
          <div className='lg:col-span-4 h-full overflow-y-auto'>
            <p className='text-lg font-montserrat font-semibold text-gray-700 p-5 bg-white border-b-[1px] sticky top-0 z-20'>Trips</p>
            <div className='p-4'>
              {
                [...Array(9)].map((_,index)=>(
                  <div key={index} className='p-3 border-l-4 border-yellow-300 mb-2'>
                    <p className='font-montserrat font-medium flex items-center gap-2'>
                      <Footprints className='text-blue-900'/>
                      Route name
                    </p>
                  </div>
                ))
              }
              
            </div>

          </div>
          <div className='lg:col-span-6 p-5 border-l-2'>
            <p>Trip Details</p>

          </div>
      </div>
    </div>
  )
}
