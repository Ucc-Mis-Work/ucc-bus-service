import React, { useState } from 'react'
import Mintitle from '../../typo/Mintitle'
import Subs from '../../typo/Subs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEye, faStar } from '@fortawesome/free-regular-svg-icons'
import PrimaryButton from '../button/PrimaryButton'
import Title from '../../typo/Title'
import TimeCard from './TimeCard'
import { faArrowRight, faClose, faLeftLong, faMoneyBill, faMoneyBills, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Button, ButtonGroup, CircularProgress } from '@mui/material'

export default function AdminRouteCard({handleDelete,handleEdit,handleView,row}) {

    const [viewDrop,setviewDrop] = useState(false)

    if(!row){
        return (
            <CircularProgress/>
        )
    }
  return (
    <div className='p-4 border-[1px] relative flex items-center justify-between bg-white mb-2'>
        <div>
            {/* <Title
                text={`${row.from} - ${row.to}`}
                otherStyles={'text-blue-900'}
            /> */}
            <h1 className='font-bold text-lg text-slate-700 font-montserrat'>{row.from} - {row.to}</h1>
            <Subs
                text={'GHC 320.00'}
                otherStyles={'font-semibold text-gray-600 italic'}
            />
            {/* <p className='text-sm'> <span className='font-medium text-slate-900'>Departure :</span> Monday</p> */}
        </div>

        {/* <Button
            color=''
            onClick={()=>setviewDrop(!viewDrop)}
        >
            <FontAwesomeIcon icon={viewDrop? faClose:faArrowRight} className='size-5 hover:rotate-45 duration-300'/>
        </Button> */}

        {/* Dropdown */}
        {
            viewDrop && (
                <div className='p-2 bg-white shadow-xl rounded-lg absolute right-5 top-14 space-y-3  z-10 ease-in-out duration-300 transition-opacity'>
                    <button className='px-10 flex items-center gap-3 bg-blue-100 py-2 rounded-md w-full'
                        onClick={()=>{
                            handleView();
                            setviewDrop(false)
                        }}
                    >
                        <FontAwesomeIcon icon={faEye} className='text-blue-900'/>
                        View
                    </button>
                    <button className='px-10 flex items-center gap-3 bg-green-200 py-2 rounded-md w-full'
                        onClick={()=>{
                            handleEdit();
                            setviewDrop(false)
                        }}
                    >
                        <FontAwesomeIcon icon={faPen} className='text-blue-900'/>
                        Edit
                    </button>
                    <button className='px-10 flex items-center gap-3 bg-red-200 py-2 rounded-md w-full'
                        onClick={()=>{
                            handleDelete();
                            setviewDrop(false)
                        }}
                    >
                        <FontAwesomeIcon icon={faTrash} className='text-red-900'/>
                        Delete
                    </button>
                </div>
            )
        }

        <div>
            <ButtonGroup>
                <Button
                    className='hover:scale-110 duration-300 transition'
                    sx={{
                        py:1,
                        backgroundColor:'white'
                    }}
                    onClick={()=>{
                        handleView();
                        setviewDrop(false)
                    }}
                >
                    <FontAwesomeIcon icon={faEye} className='text-blue-900'/>
                </Button>

                <Button
                    className='hover:scale-110 duration-300 transition'
                    sx={{
                        py:1,
                        backgroundColor:'white'
                    }}
                    onClick={()=>{
                        handleEdit();
                        setviewDrop(false)
                    }}
                >
                    <FontAwesomeIcon icon={faPen} className='text-blue-900'/>
                </Button>


                <Button
                    className='hover:scale-110 duration-300 transition'
                    sx={{
                        py:1,
                        backgroundColor:'white'
                    }}
                    onClick={()=>{
                        handleDelete();
                        setviewDrop(false)
                    }}
                >
                    <FontAwesomeIcon icon={faTrash} className='text-red-900'/>
                </Button>


            </ButtonGroup>

        </div>


    </div>
  )
}
