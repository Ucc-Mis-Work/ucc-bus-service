import React from 'react'
import Subs from '../typo/Subs'
import Mintitle from '../typo/Mintitle'
import images from '../constant/Images'

export default function Footer() {
  return (
    <div className='bg-[#041d1b] text-white py-4'>
      <div className='adjust grid grid-cols-1 gap-10 md:grid-cols-2'>

        <div>
          <h1 className='text-white font-montserrat font-bold text-xl'>Oyalo.</h1>
          <Subs
            text={'Travel with VTRANS and enjoy the best at affordable prices.'}
            otherStyles={'text-gray-400 mb-5 italic'}
          />
        </div>



      </div>
    </div>
  )
}
