import React, { useState } from 'react'
import Title from '../../typo/Title'
import { Button, Divider, InputAdornment, TextField } from '@mui/material'
import { Footprints, Search } from 'lucide-react'
import RouteCard from '../../component/Card/RouteCard'
import CardTag from '../../component/Card/CardTag'
import BusLabelTags from '../../component/BusLabelTags'
import BusSeatLayout from '../../component/BusSeatLayout'

export default function BookTrip() {
  const [selectedRoute,setSelectedRoute] = useState(null)
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
                  <div key={index} className='p-3 border-l-4 border-yellow-300 mb-2 cursor-pointer' onClick={()=>{
                    setSelectedRoute(index)
                  }}>
                    <p className='font-montserrat font-medium flex items-center gap-2'>
                      <Footprints className='text-blue-900'/>
                      Route name
                    </p>
                  </div>
                ))
              }
              
            </div>

          </div>

            {
              selectedRoute &&
              (<div className='lg:col-span-6 p-5 border-l-2 grid grid-cols-2 overflow-y-auto'>
                <div className='sticky top-0'>
                  <p className='text-lg text-gray-600 font-semibold mb-3'>Trip Details - {selectedRoute}</p>
                  <div className=' bg-blue-200/65 rounded-xl'>
                    <div className='bg bg-blue-400/35 rounded-xl p-4 grid-cols-2 grid gap-3'>

                        <CardTag
                            head={'Pickup Point'}
                            value={'UCC Campus'}
                        />
                        <CardTag
                            head={'Destination'}
                            value={'City'}
                        />
                        <CardTag
                            head={'Arrival Time'}
                            value={'5:00pm'}
                        />
                        <CardTag
                            head={'Departure Time'}
                            value={'5:30pm'}
                        />
                    </div>
                    <div className='w-full max-w-full overflow-hidden p-4'>
                              
                    </div>
                  </div>
                </div>

                
                <BusSeatLayout
                  totalSeats={selectedRoute}
                />
                <Button variant='contained' className='col-span-2' sx={{my:3,py:2}}>
                  Book
                </Button>

              </div>)
            }

      </div>
    </div>
  )
}
