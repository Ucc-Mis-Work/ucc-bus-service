import React from 'react'
import Images from '../../constant/Images'
import { Button, InputAdornment, TextField } from '@mui/material'
import { Key, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function DriverLogin() {
  return (
    <div className='flex h-screen w-full bg-black relative justify-end'>
        <img src={Images.driver} alt="" className='h-full w-full object-cover absolute'/>
        <div className='relative w-full p-16 md:w-[50%] bg-white h-full flex items-center justify-start '>
            <div>
                <h1 className='text-2xl font-montserrat font-bold'>Welcome back👋</h1>
                <p className='text-sm font-poppins text-gray-500 mb-5'>Log in to your account to manage your routes, schedules, and deliveries efficiently.</p>

                <form action="">
                    <TextField
                        fullWidth
                        InputProps={{
                            startAdornment:(
                                <InputAdornment position='start'>
                                    <Phone/>
                                </InputAdornment>
                            )
                        }}
                        sx={{
                            mb:2
                        }}
                         placeholder='Enter phone number'
                    />
                    <TextField
                        autoFocus
                        fullWidth
                        InputProps={{
                            startAdornment:(
                                <InputAdornment position='start'>
                                    <Key/>
                                </InputAdornment>
                            )
                        }}
                        sx={{
                            mb:2
                        }}
                        placeholder='Enter password'
                    />

                    <p className='text-right text-sm text-blue-800'>
                        <Link>
                            Forgot Password?
                        </Link>
                    </p>

                    <Button
                        fullWidth
                        sx={{p:2,my:3}}
                        variant='contained'
                    >
                        Enter Oyalo...🚌
                    </Button>

                </form>

                <h1 className='text-xs text-gray-500 text-center'>© copyright 2025. All rights reversed</h1>

            </div>
        </div>

    </div>
  )
}
