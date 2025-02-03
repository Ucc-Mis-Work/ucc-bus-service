import React from 'react'
import Title from '../../typo/Title'
import Subs from '../../typo/Subs'
import { Button, MenuItem, Select, TextField } from '@mui/material'

export default function PreEnquirySection() {
  return (
    <div className='bg-blue-100 px-10 pb-10 pt-24 rounded-xl mb-5'>
      {/* <Title
        text={'Where are you travelling to?'}
        otherStyles={'text-center mb-3 '}
      /> */}

      <h1 className='text-center text-2xl md:text-4xl font-bold mb-3'><span className='text-red-600'>VTrans Here🚌,</span> and ready to Transport</h1>

      <Subs
        text={'Travel with VTRANS and enjoy the best at affordable prices.'}
        otherStyles={'text-center mb-10'}
      />

      <div className='w-[80%] mx-auto gap-3 md:w-[80%] grid grid-cols-1 md:grid-cols-4'>
          <TextField/>
          <Select title='hdasdma'>
            <MenuItem disabled>Select</MenuItem>
          </Select>
          <TextField
            className='bg-white'
            type='date'
          />
          <Button variant='contained' sx={{py:2}}>
              Search
          </Button>
      </div>
    </div>
  )
}
