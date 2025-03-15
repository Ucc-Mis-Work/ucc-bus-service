import React from 'react'
import images from '../constant/Images'
import Mintitle from '../typo/Mintitle'
import Subs from '../typo/Subs'
import { Button, TextField } from '@mui/material'
import Title from '../typo/Title'

export default function AdminLanding() {
  return (
    <div className='h-screen w-full'>
        <img src={images.bus5} alt="" className='w-full h-full object-cover absolute'/>
        <div className='h-full w-full relative bg-gradient-to-t from-black to-black/05 flex items-end p-4'>

            <div className='w-full'>
                {/* <h1>VTRANS</h1> */}
                <Title
                    text={'UCC_VTrans.'}
                    otherStyles={'mb-3 text-white'}
                />
                <div className='bg-white p-4 w-full rounded-lg'>
                    <div className='w-full mdd:w-[40%]'>
                        <div className='flex justify-between'>
                            <div>
                                <Mintitle
                                    text={'Welcome to vtrans 👋'}
                                    otherStyles={'font-semibold text-primary'}
                                />
                                <Subs
                                    text={'Your journey begins here! 🚍'}
                                    otherStyles={'mb-4'}
                                />
                            </div>

                            {/* <div>
                                <button className='text-gray-600 font-montserrat font-semibold'>Register</button>
                            </div> */}
                        </div>


                        {/*  */}
                        <form className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                            <TextField
                                label='Email'
                                fullWidth
                                type='email'
                                // sx={{
                                //     mb:2
                                // }}
                            />
                            <TextField
                                label='Password'
                                fullWidth
                                type='password'
                                // sx={{
                                //     mb:3
                                // }}
                            />

                            <Button
                                fullWidth
                                variant='contained'
                                sx={{py:2}}
                                type='submit'
                            >
                                SIGN IN
                            </Button>
                        </form>

                        <h1 className='cursor-pointer text-right my-3 font-semibold text-sm text-blue-800'>Forgot password?</h1>

                    </div>



                </div>
            </div>
        </div>

    </div>
  )
}
