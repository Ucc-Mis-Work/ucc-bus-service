import { Button, InputAdornment, Select, TextField } from '@mui/material'
import { Home, Mail, MemoryStick, Phone, User, Users, WalletCards } from 'lucide-react'
import React from 'react'

export default function EditDriverVehicleForm() {
  return (
    <form className=''>

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
