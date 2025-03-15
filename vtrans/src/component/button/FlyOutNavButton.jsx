import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function FlyOutNavButton({children, href, FlyoutContent}) {

    const [Open, setOpen] = useState(false)

    const showFlyout = Open && FlyoutContent

  return (
    <div
        className='w-fit h-fit relative'
        onMouseEnter={()=> setOpen(true)}
        onMouseLeave={()=> setOpen(false)}
    >
        <Link to={href} className=' text-white'>
            {children}
            <span
                style={{
                    transform: Open? 'scaleX(1)':'scaleX(0)'
                }}
                className='absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-yellow-500 transition-transform duration-300 ease-out '
            />
        </Link>

        {/* TODO: Render flyout content */}

        {showFlyout && <div className='absolute left-1/2 top-[43px] bg-white text-black -translate-x-1/2 shadow'>
            <div className='absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white'/>
           <FlyoutContent/>
        </div>
        }
    </div>
  )
}
