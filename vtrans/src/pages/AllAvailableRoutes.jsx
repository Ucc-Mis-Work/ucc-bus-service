import React from 'react'
import Header from '../component/Header'
import RouteCard from '../component/Card/RouteCard'
import Title from '../typo/Title'
import Subs from '../typo/Subs'
import { InputAdornment, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'

export default function AllAvailableRoutes() {

    const tableDummy = [
            {
                id:'1',
                from:'UCC Campus',
                to:'Accra',
                Schedule:[
                    '8:00am',
                    '8:50am',
                    '8:20am',
                ],
                day:'Monday',
                price:'130.00'
            },
            {
                id:'2',
                from:'UCC Campus',
                to:'Kumasi',
                Schedule:[
                    '8:00am',
                    '8:50am',
                    '8:20am',
                ],
                day:'Monday',
                price:'130.00'
            },
            {
                id:'3',
                from:'UCC Campus',
                to:'Koforidua',
                Schedule:[
                    '8:00am',
                    '8:50am',
                    '8:20am',
                ],
                day:'Monday',
                price:'130.00'
            },
        ]


  return (
    <div className='min-h-screen bg-white'>
        {/* Header */}
        <Header/>

        <div className='bg-white sticky top-[68px] p-2 shadow-lg'>
            <Title
                text={"All Routes"}
                otherStyles={''}
            />
            <Subs
                text={'Browse all available routes'}
                otherStyles={'mb-2'}
            />
            <div className='w-full p-2'>
                <TextField
                    fullWidth
                   InputProps={{
                    startAdornment:(
                        <InputAdornment position='start'>
                            <Search/>
                        </InputAdornment>
                    )
                   }}
                   placeholder='Search location here'
                />
            </div>
        </div>
        <div className='adjust pt-[40px]'>
            {
                tableDummy.map((route,index)=>(
                    <RouteCard/>
                ))
            }
        </div>
    </div>
  )
}
