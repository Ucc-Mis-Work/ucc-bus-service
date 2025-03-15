import React from 'react'
import Title from '../../typo/Title'
import Subs from '../../typo/Subs'
import { Button } from '@mui/material'

export default function DeleteRoutePopup({route_id,closepopup}) {
  return (
    <div className='fixed h-full right-0 bg-black/40 bottom-0 left-0 z-20 flex items-center justify-center'>
            <div className='w-[90%] md:w-[40%] bg-white p-4 rounded-lg'>
                <Title
                    text={'Delete Route'}
                    otherStyles={'text-red-800'}
                />
                <Subs
                    text={`Are you sure you want to delete Route with ID - ${route_id} `}
                    otherStyles={'mb-10'}
                />
                <Button
                    variant='contained'
                    sx={{
                        background:'red',
                        mr:1
                    }}
                >
                    YES
                </Button>
                <Button
                    variant='contained'
                    sx={{
                        background:'blue'
                    }}
                    onClick={closepopup}
                >
                    NO
                </Button>
            </div>
    </div>
  )
}
