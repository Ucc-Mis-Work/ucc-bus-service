import React, { useState } from 'react'
import Title from '../../typo/Title'
import { Button, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import Subs from '../../typo/Subs'
import Header from '../../component/Header'
import Setup_step1 from './Setup_step1'

export default function SetRoutes() {
    const [steps, setsteps] = useState(0)
    const pages = [
        <Setup_step1/>
    ]

  return (
    <div className='flex-col h-screen flex'>
            <Header/>
            <div className='adjust h-full'>
                <Title text={'New Route Setup'}
                    otherStyles={'text-center p-3'}
                />

                <section className='flex-1 flex'>
                    <aside className='border-r-[1px] p-3 w-[200px] md:block hidden'>
                        <ul>
                            <li className='px-10 mb-3'>Step 1</li>
                            <li className='px-10 mb-3'>Step 2</li>
                            <li className='px-10 mb-3'>Review</li>
                        </ul>
                    </aside>
                    <div className='p-4'>
                        <h1 className='text-2xl font-bold font-montserrat'>Route Details</h1>
                    </div>
                </section>

            </div>
    </div>
  )
}




        {/* <div className='p-3 mb-4'>
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

        </form> */}
