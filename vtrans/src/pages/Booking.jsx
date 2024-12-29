import React, { useEffect, useState } from 'react'
import Mintitle from '../typo/Mintitle'
import CardTag from '../component/Card/CardTag'
import { Button, Stack } from '@mui/material'
import BusLabelTags from '../component/BusLabelTags'
import Subs from '../typo/Subs'
import PrimaryButton from '../component/button/PrimaryButton'

export default function Booking() {

    const [seats,setseats] = useState([])
    
    const listSeats = (totalseats)=>{
        let generatedseats = []
        for (let i = 1 ; i <=  totalseats; i++) {
            generatedseats.push(
                <button className='mx-auto'>
                    <div className='p-4 flex items-center justify-center bg-gray-200 size-16 rounded-lg'>
                        {i}
                    </div>
                </button>
            )     
        }
        setseats(generatedseats)
    }

    useEffect(()=>{
        listSeats(20)
    },[])
  return (
    <div className='p-4'>
      <div className='adjust'>
        <h1 className='p-4 mb-2 bg-primary text-white font-montserrat font-bold md:font-semibold text-sm md:text-2xl'>Bus Booking</h1>
        
        <Mintitle text={'Select Your Seat'} otherStyles={'font-semibold mb-3'}/>
        <div className='grid md:grid-cols-2 gap-5'>
            <div>
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
                    <div className='w-full max-w-full overflow-hidden p-3'>
                        <BusLabelTags
                            color={'gray'}
                            label={'Available'}
                        />
                        <BusLabelTags
                            color={'green'}
                            label={'Selected'}
                        />
                        <BusLabelTags
                            color={'red'}
                            label={'Booked'}
                        />
                        {/* <BusLabelTags
                            color={'yellow'}
                            label={'Locked'}
                        /> */}
                        
                    </div>
                </div>
            </div>
            <div>
                <Subs
                    text={'Bus Layout'}
                    otherStyles={'mb-5'}
                />

                <div className='grid-cols-4 grid gap-2 mb-4'>
                   { seats }
                </div>

                {/* <PrimaryButton
                    title={'Proceed to Payment'}
                /> */}
                <Button
                    variant='contained'
                    sx={{
                        py:2
                    }}
                    fullWidth
                >
                    Proceed to Payment
                </Button>
            </div>
        </div>
      </div>

    </div>
  )
}

