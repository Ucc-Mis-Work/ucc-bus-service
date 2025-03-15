import React from 'react'
import Title from '../typo/Title'
import { TextField, Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus, faRoad } from '@fortawesome/free-solid-svg-icons'

export default function Vehicle() {
  return (
    <div>
        <div className='w-full sticky top-0 bg-white z-20 shadow-lg mb-4 p-4'>
                    <div className='flex items-center justify-between mb-2'>
                        <Title
                            text={'All Vehicles'}
                        />

                        <Tooltip title={'Add Vehicle'}>
                            <Link to={'/admin/dashboard/newroute'}>
                                <button className='size-10 bg-gray-200 rounded-md text-primary'>
                                    <FontAwesomeIcon icon={faBus} />
                                </button>
                            </Link>
                        </Tooltip>


                    </div>
                    <TextField
                        fullWidth
                        placeholder='Search vehicle*'
                    />

        </div>
    </div>
  )
}
