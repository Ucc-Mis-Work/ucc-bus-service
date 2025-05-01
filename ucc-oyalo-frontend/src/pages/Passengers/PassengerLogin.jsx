import React, { useState } from 'react'
import Images from '../../constant/Images'
import { Button, InputAdornment, TextField } from '@mui/material'
import { Key, Mail, Phone, Users } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import OyaloBackground from '../../component/OyaloBackground'
import { SignedIn, SignOutButton, useSignIn } from '@clerk/clerk-react'
import toast from 'react-hot-toast'

export default function PassengerLogin() {

    const {isLoaded, signIn, setActive } = useSignIn()
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [cred,setCred] = useState({
        email:'',
        password:'',
    })
    const navigate = useNavigate()



    const handleSubmit = async (e) => {

        e.preventDefault()
        if (!isLoaded) return

        setIsSigningIn(true)
    
        try {
          const result = await signIn.create({
            identifier: cred.email,
            password: cred.password,
          })
    
          await setActive({ session: result.createdSessionId })
          toast.success('Login successful!')
          navigate('/passenger' , { replace: true })
    
        } catch (err) {
          console.error(err)
          toast.error(err?.errors?.[0]?.message || 'Login failed')
        }finally{
            setIsSigningIn(false)
        }
      }



  return (
    <div className='flex h-screen w-full relative justify-center items-center'>

        {/* <img src={Images.driver} alt="" className='h-full w-full object-cover absolute'/> */}
        <OyaloBackground/>
        <div className='relative w-full p-16 md:w-[40%] bg-white shadow rounded-xl flex items-center justify-start '>

            <div>
                <div className='mb-6'>
                    <div className='p-4 rounded-3xl mx-auto bg-primary/85 max-w-max text-white'>
                        <Users className='size-10'/>
                    </div>
                    <h1 className='text-center font-montserrat text-lg font-semibold text-gray-600'>Passenger</h1>
                </div>
                <h1 className='text-2xl font-montserrat font-bold'>Welcome back👋</h1>
                <p className='text-sm font-poppins text-gray-500 mb-5'>Log in to your account to manage your routes, schedules, and deliveries efficiently.</p>

                <form onSubmit={handleSubmit}>
                    <TextField
                        type='tel'
                        fullWidth
                        InputProps={{
                            startAdornment:(
                                <InputAdornment position='start'>
                                    <Mail/>
                                </InputAdornment>
                            )
                        }}
                        sx={{
                            mb:2
                        }}
                        placeholder='example@email.com'
                        value={cred.email}
                        onChange={(e)=>setCred({...cred, email: e.target.value})}

                    />
                    <TextField
                        type='password'
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
                        value={cred.password}
                        onChange={(e)=>setCred({...cred, password: e.target.value})}
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
                        type='submit'
                        disabled={isSigningIn}
                    >
                        {!isSigningIn? 'Enter Oyalo...🚌':'Getting onboard'}
                    </Button>

                </form>

                    <SignedIn>
                        <SignOutButton/>
                    </SignedIn>
                <h1 className='text-xs text-gray-500 text-center'>© copyright 2025. All rights reversed</h1>

            </div>
        </div>

    </div>
  )
}
