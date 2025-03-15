import { IconButton, InputAdornment, TextField } from '@mui/material'
import { Search } from 'lucide-react'
import React from 'react'

export default function DriverJournies() {
  return (
    <div className='min-h-max h-screen bg-gray-50 py-10'>
        <div className='adjust'>
            <div>
                <h1 className='font-montserrat font-bold text-primary text-3xl'>My Journies</h1>
                <p className='text-sm text-gray-500 mb-3'>Check list and select a route to start your journey with Oyalo👍</p>
            </div>
            <TextField
                fullWidth
                InputProps={{endAdornment:(
                    <InputAdornment position='end'>
                        <IconButton>
                            <Search/>
                        </IconButton>
                    </InputAdornment>
                )}}
                sx={{mb:3}}
                // onChange={(e)=>searchResult(e)}
                // value={search}
                placeholder='Search for location/place'
            />

            <div className='p-4 bg-white rounded-xl shadow'>
                <table className='w-full'>
                    <thead>
                        <tr className='font-montserrat font-semibold'>
                            <td>ID</td>
                            <td>Date</td>
                            <td>Route</td>
                            <td>Status</td>
                            <td>Vehicle</td>
                            <td>Payment</td>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                    <tfoot>

                    </tfoot>
                </table>
            </div>



        </div>
    </div>
  )
}
