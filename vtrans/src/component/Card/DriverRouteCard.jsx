import React from 'react'
import Mintitle from '../../typo/Mintitle'
import Subs from '../../typo/Subs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faStar } from '@fortawesome/free-regular-svg-icons'
import PrimaryButton from '../button/PrimaryButton'
import Title from '../../typo/Title'
import TimeCard from './TimeCard'
import { faMoneyBill, faMoneyBills } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Calendar, Coins } from 'lucide-react'

export default function DriverRouteCard({from,to,time,date,fare,day,handleclick}) {
  return (
    <div className='p-7 border-[1px] bg-white mb-2 gap-2 shadow rounded-3xl'>
      <div>
        <h1 className='mb-4 text-primary truncate font-montserrat font-bold text-3xl'>
            {from} - {to}
        </h1>

        <div className='grid grid-cols-2'>
            <div className='space-y-0'>
                <Coins className='text-gray-500'/>
                <h1 className='font-semibold font-montserrat mb-2'>{fare}</h1>
                <p className='text-xs text-gray-500'>per passenger</p>
            </div>
            <div className='space-y-'>
                <Calendar className='text-gray-500'/>
                <h1 className='font-semibold font-montserrat text-sm text-gray-700'>{day} - {time}</h1>
                <p className='mb-3 text-lg font-semibold text-blue-900'>{date}</p>
            </div>
        </div>
      </div>
      <div className='flex justify-end'>
        <PrimaryButton
            title={'Accept Trip'}
            handleclick={handleclick}
        />
      </div>
    </div>
  )
}
