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

export default function RouteCard() {
  return (
    <div className='p-7 border-[1px] grid grid-cols-2 bg-white mb-2'>
      <div>
        <Title 
            text={'Campus - Accra'}
        />
        <Subs
            text={'Air Conditioned'}
            otherStyles={'font-semibold'}
        />

        <div className='my-4'>
            <FontAwesomeIcon icon={faStar}/>
        </div>

        <div className='mb-4'>
            <Subs
                text={'Vehicle Type'}
            />
            <h1 className='font-semibold font-montserrat'>Sprinter</h1>
        </div>
        <Link to={'/booking/1'}>
        <PrimaryButton
            title={'Book Ticket'}
        />
        </Link>
      </div>

      {/*  */}
      <div className='space-y-2'>
        <div className='space-y-'>
            <FontAwesomeIcon icon={faClock}/>
            <h1 className='font-semibold font-montserrat mb-2'>Monday</h1>
            <TimeCard
                text={'8:00am'}
            />
            <TimeCard
                text={'8:00am'}
            />
            <TimeCard
                text={'8:00am'}
            />
        </div>

        <div className='space-y-0'>
            <FontAwesomeIcon icon={faMoneyBills}/>
            <h1 className='font-semibold font-montserrat mb-2'>GHC 250.00</h1>
            <p className='text-xs text-gray-500'>per passenger</p>
        </div>


      </div>
    </div>
  )
}
