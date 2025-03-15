import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { Bus, MapPinCheck, Search } from 'lucide-react'
import React, { useState } from 'react'
import DriverRouteCard from '../../component/Card/DriverRouteCard'
import OyaloBackground from '../../component/OyaloBackground'
import { Link } from 'react-router-dom'

export default function DriverRoutesSelect() {

    const _trips=[
        {
            from:'UCC Campus',
            to:'Accra',
            date:'14 June,2025',
            day:'Monday',
            time:'8:00 am',
            fare:'GH₵ 80.00'
        },
        {
            from:'UCC Campus',
            to:'Kumasi',
            date:'1 March,2025',
            day:'Saturday',
            time:'6:00 am',
            fare:'GH₵ 200.00'
        },
        {
            from:'UCC Campus',
            to:'Tarkoradi',
            date:'14 June,2025',
            day:'Monday',
            time:'8:00 am',
            fare:'GH₵ 80.00'
        },
        {
            from:'UCC Campus',
            to:'Accra',
            date:'14 June,2025',
            day:'Monday',
            time:'2:00 pm',
            fare:'GH₵ 80.00'
        },
    ]
    const [search,setsearch] = useState('')
    const [trips,settrips] = useState(_trips)
    const [selectedTrip,setselectedTrip] = useState(null)



    const searchResult = (e)=>{
        const value = e.target.value
        setsearch(value)

        console.log(value);


       if(value === ''){
            settrips(_trips)
       }else{

            const filterTrip = _trips.filter((trip)=>{
                trip.from.toLowerCase().includes(value.toLowerCase()) ||
                trip.to.toLowerCase().includes(value.toLowerCase()) ||
                trip.date.toLowerCase().includes(value.toLowerCase()) ||
                trip.day.toLowerCase().includes(value.toLowerCase()) ||
                trip.fare.toLowerCase().includes(value.toLowerCase()) ||
                trip.time.toLowerCase().includes(value.toLowerCase())
            })

            console.log(filterTrip);

            settrips(filterTrip)
       }
    }




  return (
    <div className='min-h-max h-screen bg-gray-50 py-10'>
        <div className='adjust'>
            <div>
                <h1 className='font-montserrat font-bold text-primary text-3xl'>Select Your Path</h1>
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
                onChange={(e)=>searchResult(e)}
                value={search}
                placeholder='Search for location/place'
            />

            {/* TODO: List of Routes to select from*/}
            <div className='grid md:grid-cols-2 gap-3'>
                {
                    trips.map((dt,index)=>(
                        <DriverRouteCard
                            key={index}
                            date={dt.date}
                            day={dt.day}
                            time={dt.time}
                            from={dt.from}
                            to={dt.to}
                            fare={dt.fare}
                            handleclick={()=>{
                                setselectedTrip(dt)
                            }}
                        />
                    ))
                }
            </div>

        </div>

        <Dialog open={selectedTrip} fullWidth fullScreen>
                <DialogTitle>
                    <div>
                        <p className='text-gray-600 text-sm'>Oyalo</p>
                        <h1 className='font-montserrat text-lg font-bold md:text-3xl  flex items-center gap-2'>Accept Trip <MapPinCheck className='text-blue-700'/></h1>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <div>
                        <OyaloBackground/>
                        <div className='relative min-h-full py-10  w-full flex items-center justify-center'>
                            <form action="" className='p-6 shadow bg-white rounded-xl w-full md:w-[40%]'>
                                <>
                                    <h1 className='mb-8 font-montserrat font-semibold text-xl text-primary'>
                                        Ready For Your Oyalo Trip !👍
                                    </h1>
                                    <div>
                                        <p className='text-primary'>Trip</p>
                                        {selectedTrip &&
                                            <h1 className='font-montserrat text-xl font-bold text-gray-600 mb-6'>
                                                {selectedTrip.from} - {selectedTrip.to}
                                            </h1>
                                            }
                                    </div>

                                    <hr className='my-6'/>
                                </>

                                <div>
                                    <InputLabel sx={{mb:1}}>
                                        <h1 className='flex items-center gap-1'>
                                            <Bus/>Select Vehicle
                                        </h1>
                                    </InputLabel>
                                    <Select
                                    sx={{mb:2}}
                                        fullWidth
                                    >
                                        <MenuItem></MenuItem>
                                    </Select>
                                </div>

                                <div className='flex items-center justify-center my-2'>
                                    <FormControlLabel
                                        control={<Checkbox/>}
                                        label={
                                            <Link className='text-blue-700 underline' to={'/term&conditions'}>
                                                By Submitting, You agree to terms and conditions
                                            </Link>
                                        }

                                    />
                                </div>

                                <Button
                                    variant='contained'
                                    fullWidth
                                    sx={{p:2}}
                                >
                                    Accept
                                </Button>
                            </form>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>setselectedTrip(null)} variant='contained' sx={{py:2, px:10}}>
                        CLOSE
                    </Button>
                </DialogActions>
        </Dialog>
    </div>
  )
}
