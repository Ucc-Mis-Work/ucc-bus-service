import React from 'react'
import Title from '../../typo/Title'
import Subs from '../../typo/Subs'
import { Button, MenuItem, Select, TextField } from '@mui/material'

export default function PreEnquirySection() {
  return (
    <div className='bg-secondary px-10 pb-10 pt-24 rounded-xl mb-10'>

      <h1 className='text-center text-2xl md:text-4xl font-bold mb-3 text-white'><span className='text-primary'>Oyalo Here🚌,</span> ready to take you places!</h1>

      <Subs
        text={'Choose Oyalo for your travels and experience top-notch service at budget-friendly prices!'}
        otherStyles={'text-center mb-10'}
      />

      <div className='w-[80%] mx-auto gap-3 md:w-[80%] grid grid-cols-1 md:grid-cols-4'>
          <TextField
            placeholder='Selct pickup point*'
          />
          <Select>
            <MenuItem disabled>Select</MenuItem>
          </Select>
          <TextField
            className='bg-'
            type='date'
          />
          <Button variant='contained' sx={{py:2,backgroundColor:'#1D2D36'}}>
              Search
          </Button>
      </div>

      
    </div>
  )
}
