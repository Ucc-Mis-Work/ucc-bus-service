import React, { useEffect, useState } from 'react'
import Subs from '../../typo/Subs'
import images from '../../constant/Images'

export default function BusInfo() {

    const [currentindex, setcurrentindex] = useState(0)

    const items = [
        
        {
            image:images.bus4,
            title:'Bus image3',
            subs:'SMART INFO FIDJ IFI IRTBI ITM IRTMI MRITMI MRTINM I'
        },
        {
            image:images.bus5,
            title:'Bus image3',
            subs:'SMART INFO FIDJ IFI IRTBI ITM IRTMI MRITMI MRTINM I'
        },
        {
            image:images.bus9,
            title:'Bus image3',
            subs:'SMART INFO FIDJ IFI IRTBI ITM IRTMI MRITMI MRTINM I'
        },
        {
            image:images.bus7,
            title:'Bus image3',
            subs:'SMART INFO FIDJ IFI IRTBI ITM IRTMI MRITMI MRTINM I'
        },
        // {
        //     image:images.bus8,
        //     title:'Bus image3',
        //     subs:'SMART INFO FIDJ IFI IRTBI ITM IRTMI MRITMI MRTINM I'
        // },
    ]


    useEffect(()=>{
        const timer = setTimeout(()=>{
            setcurrentindex(()=>(
                currentindex +1 < items.length ? currentindex +1 : 0
            ))
        },5000)

        return ()=>clearTimeout(timer)
    },[currentindex])
  return (
    <div className='h-[30%] md:h-[50%] bg-black mb-5 relative overflow-hidden'>
        <img src={items[currentindex].image} alt="" className='absolute object-cover w-full h-full ease-in-out duration-500'/>
        <div className='relative bg-gradient-to-tr from-transparent to-black h-full'>
            <div className='relative adjust flex items-center h-full text-white justify-end'>
                <div>
                    <h1 className='text-white font-montserrat font-bold text-2xl md:text-4xl mb-4'>
                        {items[currentindex].title}
                    </h1>
                    <Subs
                        text={items[currentindex].subs}
                    />
                </div>
            </div>
        </div>





        <div className='absolute bottom-0 left-0 right-0 flex items-center justify-center p-3 gap-2'>
            {
                items.map((info,index)=>(
                    <div key={index} className={`${currentindex === index? 'h-3 w-6 ease-in-out bg-white duration-500 ':'h-3 w-3 border-2'} rounded-full  `}/>
                ))
            }
        </div>
      
    </div>
  )
}
