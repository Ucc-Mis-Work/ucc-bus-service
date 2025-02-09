import React from 'react'
import OyaloBackground from '../../component/OyaloBackground'
import { BusFront, MemoryStick, Users } from 'lucide-react'
import { Button, InputAdornment, InputLabel, Select, TextField } from '@mui/material'

export default function AddVehicle() {
  return (
    <div className='relative h-screen'>
            <OyaloBackground/>
            <div className='relative flex items-center justify-center h-full w-full py-9'>
                <div className='bg-white p-6 rounded-lg shadow w-[90%] md:w-[30%]'>
                    <div className='p-4 rounded-full bg-secondary/25  max-w-max mx-auto mb-5'>
                        <BusFront
                            className='size-14 text-yellow-400'
                        />
                    </div>
                    <h1 className='text-2xl font-poppins font-semibold text-primary'>
                        Let Add Your Vehicle To Oyalo!
                    </h1>
                    <p className='text-sm text-gray-600 mb-10'>Say Oyalo and we are there!..🚌</p>

                    <form action="">


                            <TextField
                                autoFocus
                                fullWidth
                                InputProps={{startAdornment:(
                                    <InputAdornment position='start'>
                                        <MemoryStick/>
                                    </InputAdornment>
                                )}}
                                placeholder='Vehicle Number Plate*'
                                sx={{mb:2}}
                            />
                            <TextField
                                autoFocus
                                fullWidth
                                InputProps={{startAdornment:(
                                    <InputAdornment position='start'>
                                        <Users/>
                                    </InputAdornment>
                                )}}
                                placeholder='Max passengers*'
                                sx={{mb:2}}
                                type='number'
                            />
                            <Select
                                fullWidth
                                displayEmpty
                                renderValue={(selected)=>selected? selected : <h1 className='text-gray-400'>
                                    Select vehicle type
                                </h1>}
                                sx={{mb:2}}
                            >

                            </Select>

                            <Button
                                variant='contained'
                                fullWidth
                                sx={{py:2,mt:4}}
                            >
                                Add vehicle
                            </Button>

                    </form>
                </div>
            </div>
    </div>
  )
}
