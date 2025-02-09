import { Button, InputAdornment, TextField } from '@mui/material'
import { Home, Mail, Phone, User, WalletCards } from 'lucide-react'
import React from 'react'

export default function EditDriverForm() {
  return (
    <form className='gap-3 mx-auto grid grid-cols-1 md:grid-cols-2'>
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
            // value={formdata.name}
            // onChange={(e)=>setformdata({...formdata, name: e.target.value})}
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
            // value={formdata.phone_number}
            // onChange={(e)=>setformdata({...formdata, phone_number: e.target.value})}
            // className='md:col-span-2'
            placeholder='Phone number'
        />

         <TextField
            fullWidth
            InputProps={{
                startAdornment:(
                    <InputAdornment position='start'>
                        <Home/>
                    </InputAdornment>
                )
            }}
            sx={{
                mb:2
            }}
                placeholder='Home Address'
        />

         <TextField
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
            className='md:col-span-2'
            placeholder='Personal Email'
        />

        <TextField
            fullWidth
            InputProps={{
                startAdornment:(
                    <InputAdornment position='start'>
                        <WalletCards/>
                    </InputAdornment>
                )
            }}
            sx={{
                mb:2
            }}
            className='md:col-span-2'
            placeholder='Drivers License*'
        />

        <Button
            fullWidth
            sx={{p:2,mt:2}}
            variant='contained'
            className='md:col-span-2'
        >
            UPDATE
        </Button>


        <h1 className='text-xs text-gray-500 text-center mt-9 col-span-2'>© copyright 2025. All rights reversed</h1>
    </form>
  )
}
