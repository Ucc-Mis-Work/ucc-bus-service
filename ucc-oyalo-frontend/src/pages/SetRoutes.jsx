import React from 'react'
import Title from '../typo/Title'
import { Button, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import Subs from '../typo/Subs'

export default function SetRoutes() {
  return (
    <div className='adjust overflow-y-auto h-full'>
        <div className='p-3 mb-4'>
            <Title
                text={'Set Routes'}
            />
            <Subs
                text={'Add your new route'}
            />
        </div>
        <form className='md:grid-cols-3 grid-cols-1 grid gap-4 p-2'>
            <div className='w-full'>
                <InputLabel>From*</InputLabel>
                <Select
                    fullWidth
                    displayEmpty
                >
                    <MenuItem disabled>
                        <em>Select an option</em>
                    </MenuItem>
                    <MenuItem></MenuItem>
                </Select>
            </div>

            <div className='w-full'>
                <InputLabel>To*</InputLabel>
                <Select
                    fullWidth
                    displayEmpty
                >
                    <MenuItem disabled>
                        <em>Select an option</em>
                    </MenuItem>
                    <MenuItem></MenuItem>
                </Select>
            </div>

            <div className='w-full'>
                <InputLabel>Available Vehicle*</InputLabel>
                <Select
                    fullWidth
                    displayEmpty
                >
                    <MenuItem disabled>
                        <em>Select an option</em>
                    </MenuItem>
                    <MenuItem></MenuItem>
                </Select>
            </div>

            <div className='w-full'>
                <InputLabel>Set Time*</InputLabel>
                <Select
                    fullWidth
                    displayEmpty
                >
                    <MenuItem disabled>
                        <em>Select an option</em>
                    </MenuItem>
                    <MenuItem></MenuItem>
                </Select>
            </div>

            <div className='w-full'>
                <InputLabel>Price*</InputLabel>
                <TextField
                    type='number'
                    fullWidth
                    slotProps={{
                        input: {
                        startAdornment: <InputAdornment position="start">GHC</InputAdornment>,
                        },
                    }}
                />
            </div>

            <div>

            </div>

            <TextField
             className='md:col-span-3'
             multiline
             label={'Note for passengers - (Optional)'}
             rows={3}
            />

            <Button
                variant='contained'
                fullWidth
                type='submit'
                className='md:col-span-3'
                sx={{
                    py:2
                }}
            >
                Set Path
            </Button>

        </form>
    </div>
  )
}
