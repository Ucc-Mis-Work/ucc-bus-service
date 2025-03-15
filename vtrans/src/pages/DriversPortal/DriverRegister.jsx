import React, { useState } from 'react'
import Images from '../../constant/Images'
import { Button, InputAdornment, MenuItem, Select, TextField } from '@mui/material'
import { Bus, CarFront, Home, Key, Mail, Phone, User, Users } from 'lucide-react'
import Header from '../../component/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import OyaloBackground from '../../component/OyaloBackground'


export default function DriverRegister() {


    const roles = [
        {
            icon: <Users/>,
            title:'Passenger',
            value:'passenger'
        },
        {
            icon:<CarFront/>,
            title:'Driver',
            value:'driver'
        }
    ]


    const [formdata,setformdata] = useState({
        name:'',
        phone_number:'',
        password:'',
        password_confirmation:'',
        role:''
    })
  return (
    <div className='flex min-h-screen w-full relative justify-start flex-col '>
        <Header/>
        <OyaloBackground/>
        <div className='w-full p-16 h-full flex items-center justify-center  relative'>

            <div className='bg-white shadow p-4 rounded-md'>
                <h1 className='text-2xl font-montserrat font-bold'>Create an Account 🚌</h1>
                <p className='text-sm font-poppins text-gray-500 mb-10'>Join the Oyalo Journey and Transport Passenger safely.</p>

                <form action="" className='gap-3 mx-auto grid grid-cols-1 md:grid-cols-2'>
                    <TextField
                        autoFocus
                        fullWidth
                        InputProps={{
                            startAdornment:(
                                <InputAdornment position='start'>
                                    <User/>
                                </InputAdornment>
                            )
                        }}
                        sx={{
                            mb:2
                        }}
                        className='md:col-span-2'
                        value={formdata.name}
                        onChange={(e)=>setformdata({...formdata, name: e.target.value})}
                        placeholder='Your full name*'
                    />

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
                        value={formdata.phone_number}
                        onChange={(e)=>setformdata({...formdata, phone_number: e.target.value})}
                        // className='md:col-span-2'
                        placeholder='Phone number'
                    />

                    <Select
                        fullWidth
                        sx={{
                            mb:2
                        }}
                        value={formdata.role}
                        displayEmpty
                        onChange={(e)=>setformdata({...formdata, role:e.target.value})}
                        renderValue={(selected)=>selected? selected : 'Select your Role In Oyalo'}
                        // className='md:col-span-2'
                    >
                        {
                            roles.map((role,index)=>(
                                <MenuItem key={index} value={role.value}>
                                    <h1 className='flex items-center gap-2'>
                                        {role.icon}
                                        {role.title}
                                    </h1>
                                </MenuItem>
                            ))
                        }
                    </Select>

                    <TextField
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
                        value={formdata.password}
                        onChange={(e)=>setformdata({...formdata, password: e.target.value})}
                        placeholder='Password'
                    />

                    <TextField
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
                        placeholder='Confirm password'
                        value={formdata.password_confirmation}
                        onChange={(e)=>setformdata({...formdata, password_confirmation: e.target.value})}
                    />

                    <Button
                        fullWidth
                        sx={{p:2,mt:2}}
                        variant='contained'
                        className='md:col-span-2'
                    >
                        Oyalo...🚌
                    </Button>

                </form>

                <div className='flex items-center justify-center gap-3 text-gray-700 my-2'>
                    <hr className='flex-1'/>
                        or
                    <hr className='flex-1'/>
                </div>

                <div className='felx items-center justify-center gap-4'>
                    <button className='p-4 rounded-lg bg-gray-100 my-2 flex gap-2 items-center justify-center w-full hover:bg-[#FFD43B]  hover:text-[#183153]'>
                        Continue with Google
                        <FontAwesomeIcon icon={faGoogle} className='size-5'/>
                    </button>


                </div>


                <h1 className='text-xs text-gray-500 text-center mt-9'>© copyright 2025. All rights reversed</h1>

            </div>

            {/* TODO:
                Email
                Phone
                Address
                Name
                Password
                Drivers Lis._Id

            */}
        </div>

    </div>
  )
}




