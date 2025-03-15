import React, { useState } from 'react'
import TimeCard from '../component/Card/TimeCard'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Tooltip } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faAdd, faPen, faRoad, faTrash } from '@fortawesome/free-solid-svg-icons'
import '../tablestyle.css'
import Title from '../typo/Title'
import { Link } from 'react-router-dom'
import DeleteRoutePopup from '../component/popup/DeleteRoutePopup'
import { Schedule } from '@mui/icons-material'
import AdminRouteCard from '../component/Card/AdminRouteCard'
import Subs from '../typo/Subs'
import Mintitle from '../typo/Mintitle'

export default function AllRoutes() {

    const [showDelete,setshowDelete] = useState(false)
    const [showEdit,setshowEdit] = useState(false)
    const [showDetails,setshowDetails] = useState(false)
    const [selectedrow,setselectedrow] = useState(null);


    const setdeletePopup = (data)=>{
        setselectedrow(data)
        setshowDelete(true)
    }

    const setEditPopup = (data)=>{
        setselectedrow(data)
        setshowEdit(true)
    }

    const setViewPopup = (data)=>{
        setselectedrow(data)
        setshowDetails(true)
    }

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
    <div className='bg-white h-full overflow-y-auto'>

        <div className='w-full sticky top-0 bg-white z-20 shadow-lg mb-4 p-4'>
            <div className='flex items-center justify-between mb-2'>
                <Title
                    text={'All Routes'}
                />

                <Tooltip title={'Add Route'}>
                    <Link to={'/admin/newroute'}>
                        <button className='size-10 bg-gray-200 rounded-md text-primary'>
                            <FontAwesomeIcon icon={faRoad} />
                        </button>
                    </Link>
                </Tooltip>


            </div>
            <TextField
                fullWidth
                placeholder='Search*'
            />

        </div>

        <table className='border-2 rounded-xl overflow-hidden w-full text-sm border-gray-100 hidden md:table'>
        <thead className='bg-gray-200 text-medium'>
            <tr>
                <th className='font-medium'>Traveling From</th>
                <th className='font-medium'>Traveling To</th>
                <th className='font-medium hidden lg:visible lg:table-cell'>Trip Type</th>
                <th className='font-medium hidden lg:visible lg:table-cell'>Schedule</th>
                <th className='font-medium'>Price</th>
                <th className='font-medium'>Alter</th>
            </tr>
        </thead>
        <tbody>
            {
                tableDummy.map((row,index)=>(

                        <tr className='' key={index}>
                            <td className='font-medium'>{row.from}</td>
                            <td>{row.to}</td>
                            <td className='hidden lg:visible lg:table-cell'>Schedule</td>
                            <td className='text-left hidden lg:visible lg:table-cell'>

                                {/* day */}
                                <h1 className='font-semibold text-gray-500 mb-2'>{row.day}</h1>
                                {
                                    row.Schedule.map((time,index)=>(
                                        <TimeCard
                                        key={index}
                                            text={time}
                                        />
                                    ))
                                }

                            </td>
                            <td className='text-gray-700'>{row.price}</td>
                            <td className='space-x-3'>
                                <div className='space-x-1'>
                                    <button className='p-2 size-10 bg-blue-400/40 rounded-md' onClick={()=>{setViewPopup(row)}}>
                                        <FontAwesomeIcon icon={faEye} className='text-blue-900'/>
                                    </button>
                                    <button className='p-2 size-10 bg-green-400/40 rounded-md' onClick={()=>{setEditPopup(row)}}>
                                        <FontAwesomeIcon icon={faPen} className='text-green-900'/>
                                    </button>
                                    <button className='p-2 size-10 bg-red-400/40 rounded-md' onClick={()=>{setdeletePopup(row)}}>
                                        <FontAwesomeIcon icon={faTrash} className='text-red-900'/>
                                    </button>
                                </div>
                            </td>

                        </tr>

                ))
            }
        </tbody>
        </table>


        <div className='p-3 block md:hidden'>
            {
                tableDummy.map((route,index)=>(
                    <AdminRouteCard
                        row={route}
                        key={index}
                        handleDelete={()=>{
                            setdeletePopup(route)
                        }}
                        handleEdit={()=>{
                            setEditPopup(route)
                        }}
                        handleView={()=>{
                            setViewPopup(route)
                        }}
                    />

                ))
            }
        </div>


        {/* Edit */}
        <Dialog open={showEdit}>
            <DialogTitle>
                <Mintitle
                    text={'Edit Routes'}
                    otherStyles={'text-blue-800'}
                />
                <Subs
                    text={`Make changes to Route "${ selectedrow && selectedrow.from}-${ selectedrow && selectedrow.to}" here `}
                    otherStyles={''}
                />
            </DialogTitle>

            <DialogContent>
                <form action="">
                    <TextField
                        fullWidth
                        sx={{mb:2}}
                        // label='From'
                        placeholder='From'
                        value={selectedrow && selectedrow.from}
                    />
                    <TextField
                        fullWidth
                        sx={{mb:2}}
                        // label='From'
                        placeholder='From'
                        value={selectedrow && selectedrow.to}
                    />
                    <TextField
                        fullWidth
                        sx={{mb:2}}
                        // label='From'
                        placeholder='Price'
                        value={selectedrow && selectedrow.price}
                    />
                    {/* <Button
                        fullWidth
                        variant='contained'
                        sx={{
                            py:2
                        }}
                    // onClick={()=>setshowEdit(false)}
                    >Update</Button> */}

                </form>

            </DialogContent>

            <DialogActions>
                <Button
                    variant='contained'
                    sx={{
                        backgroundColor:'blue',
                        color:'white'
                    }}
                    onClick={()=>setshowEdit(false)}
                >Cancel</Button>
                <Button
                    variant='contained'
                    sx={{
                        backgroundColor:'green',
                        color:'white'
                    }}
                >Update</Button>
            </DialogActions>
        </Dialog>

        {/* Detele */}
        <Dialog open={showDelete}>
            <DialogTitle>
                    <Mintitle
                        text={'Delete Route'}
                        otherStyles={'text-red-800'}
                    />
                    <Subs
                        text={`Are you sure you want to delete Route "${ selectedrow && selectedrow.from}- ${ selectedrow && selectedrow.to}" `}
                        otherStyles={''}
                    />
            </DialogTitle>
            <DialogContent>
                <TextField
                    fullWidth
                    placeholder='Type in the route*'
                />
            </DialogContent>
            <DialogActions>
                <Button
                    variant='contained'
                    sx={{
                        backgroundColor:'blue',
                        color:'white'
                    }}
                    onClick={()=>setshowDelete(false)}
                >Cancel</Button>
                <Button
                    variant='contained'
                    sx={{
                        backgroundColor:'red',
                        color:'white'
                    }}
                >Delete</Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}
