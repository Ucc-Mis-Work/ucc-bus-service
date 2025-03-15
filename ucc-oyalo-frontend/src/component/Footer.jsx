import React from 'react'
import Subs from '../typo/Subs'
import Mintitle from '../typo/Mintitle'
import images from '../constant/Images'

export default function Footer() {
  return (
    <div className='bg-black text-white py-4'>
      <div className='adjust grid grid-cols-1 gap-10 md:grid-cols-2'>

        <div>
          <h1 className='text-blue-600 font-montserrat font-bold text-xl'>VTrans.</h1>
          <Subs
            text={'Travel with VTRANS and enjoy the best at affordable prices.'}
            otherStyles={'text-gray-400 mb-5 italic'}
          />

          <img src={images.wtsp} alt="" className='size-7 inline-flex mr-2'/>
          <img src={images.phone} alt="" className='size-6 inline-flex mr-2'/>
          <img src={images.mail} alt="" className='size-6 inline-flex mr-2'/>
          
          <h1 className='text-sm text-gray-200 mt-2'>00000000/0000000</h1>
          <h1 className='text-sm text-gray-200 mt-2'>mail@gmail.com</h1>
        </div>

        <div>
          <Mintitle
            text={'FAQ'}
            otherStyles={'font-bold mb-2 text-blue-600'}
          />

          <div className='space-y-2'>
            <h1 className='text-sm'>How do I make payment</h1>
            <h1 className='text-sm'>How do I make payment</h1>
            <h1 className='text-sm'>How do I make payment</h1>
            <h1 className='text-sm'>How do I make payment</h1>
            <h1 className='text-sm'>How do I make payment</h1>
            <h1 className='text-sm'>How do I make payment</h1>
            <h1 className='text-sm'>How do I make payment</h1>
          </div>


        </div>

      </div>
    </div>
  )
}
