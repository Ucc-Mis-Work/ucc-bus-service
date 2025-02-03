import React from 'react'
import PreEnquirySection from './subpages/PreEnquirySection'
import Footer from '../component/Footer'
import Header from '../component/Header'
import AvailableRouteTransports from './subpages/AvailableRouteTransports'
import BusInfo from './subpages/BusInfo'
import BookingTips from './subpages/BookingTips'

export default function Landing() {
  return (
    <div className='h-screen bg-white'>
        <Header/>
        <div className='adjust'>
            <PreEnquirySection/>
        </div>
        <BusInfo/>
        <AvailableRouteTransports/>
        <BookingTips/>
        <Footer/>
            
    </div>
  )
}
