import React, { useEffect, useState } from 'react'
import PreEnquirySection from './subpages/PreEnquirySection'
import Footer from '../component/Footer'
import Header from '../component/Header'
import TodayRoutes from './subpages/TodayRoutes'
import BusInfo from './subpages/BusInfo'
import BookingTips from './subpages/BookingTips'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { BusAlert, VerticalShadesClosed } from '@mui/icons-material'
import Title from '../typo/Title'
import { ArrowRight, ArrowUpToLine, Bus, User } from 'lucide-react'
import Images from '../constant/Images'

export default function Landing() {
    const [isScrolled,setisScrolled] = useState(false)

    const scrollTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })

    }

    useEffect(()=>{
        window.screenTop ? setisScrolled(true): setisScrolled(false)
    },[])
  return (
    <div className='min-h-screen h-screen bg-white relative'>
        <Header/>
        <BusInfo/>
        <div className='adjust'>
            <PreEnquirySection/>
        </div>

        <div className='px-4 py-16 bg-white grid grid-cols-1 md:grid-cols-2 relative adjust my-10 border-y-[1px] gap-5'>
            {/* Ads Text Passenger */}
            <div>
                <h1 className='text-base md:text-lg font-montserrat font-medium text-blue-700 flex items-center gap-2 mb-3'>Oyalo Passengers <User/> </h1>
                <Title text={'Your Ride, Your Way – Anytime, Anywhere!'} otherStyles={'mb-6 text-primary'}/>
                <p className='text-base leading-7 text-gray-600'>
                    Say goodbye to waiting and hello to convenience! With Oyalo 🚌, booking a ride is as easy as a tap. Whether you're heading to work, meeting friends, or exploring the city, we’ve got you covered. Enjoy safe, affordable, and reliable rides at your fingertips. Download the app today and experience the future of transport!
                </p>

                <Link to={'/passenger/login'} className='text-blue-700 text sm underline flex items-center gap-3 font-montserrat font-semibold mt-9 group'>
                    <h1 className='py-2'>See What Oyalo Has For Passengers </h1>
                    <ArrowRight className='group-hover:translate-x-3 duration-200'/>
                </Link>
            </div>

            {/* TODO: Add Image */}
            <div className='bg-secondary shadow h-[400px] rounded-xl group overflow-hidden'>
                <img src={Images.passenger1} alt="" className='w-full h-[90%] group-hover:h-full shadow-md rounded-xl object-cover duration-300'/>
            </div>
        </div>



        <div className='px-4 py-16 bg-white grid grid-cols-1 md:grid-cols-2 relative adjust my-10 border-b-[1px] gap-5'>
            {/* TODO: Add Image */}
            <div className='bg-yellow-400 shadow h-[400px] rounded-xl group overflow-hidden sm:order-2 md:order-1'>
                <img src={Images.driver1} alt="" className='w-full h-[90%] group-hover:h-full shadow-md rounded-xl object-cover duration-300'/>
            </div>


            {/* Ads Text Driver */}
            <div className='sm:order-1 md:order-2'>
                <h1 className='text-base md:text-lg font-montserrat font-medium text-blue-700 flex items-center gap-2 mb-3'>Oyalo Drivers <Bus/> </h1>
                <Title text={'Drive More, Earn More – On Your Terms!'} otherStyles={'mb-6 text-primary'}/>
                <p className='text-base leading-7 text-gray-600'>
                Turn your vehicle into a money-making machine! With [Your Transport System Name], you’re in control. Set your own schedule, earn competitive rates, and enjoy a seamless experience with our easy-to-use driver app. Join our growing community of drivers today and start earning on your own terms!
                </p>


                <Link to={'/driver/login'} className='text-blue-700 text sm underline flex items-center gap-3 font-montserrat font-semibold mt-9 group'>
                    <h1 className='py-2'>Drivers, Oyalo!! </h1>
                    <ArrowRight className='group-hover:translate-x-3 duration-200'/>
                </Link>
            </div>
        </div>


        <BookingTips/>
        <Footer/>


        { isScrolled && <button className='fixed bg-white rounded-full p-4 shadow-md right-28 bottom-28 z-20' onClick={scrollTop}>
            <ArrowUpToLine/>
        </button>}
    </div>
  )
}
