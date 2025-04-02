import React from 'react'
import { AnalysisCard } from '../../component/Card/new/AnalysisCard'
import { Book, Construction, Footprints, ListCheck, ListChecks, LocateFixed, Mail, PenLine, Phone, Search, User, UserCheck } from 'lucide-react'
import { CustomLink } from '../../component/button/CustomLink'

export default function PassengerLanding() {

    const links = [
        {
            name:'Search Route',
            link:'',
            icon:<Search className='group-hover:scale-110 group-hover:text-white duration-150'/>
        },
        {
            name:'Book A Trip',
            link:'/passenger/booktrip',
            icon:<Book className='group-hover:scale-110 group-hover:text-white duration-150'/>
        },
        {
            name:'My Trips',
            link:'/passenger/mytrips/1',
            icon:<Construction className='group-hover:scale-110 group-hover:text-white duration-150'/>
        },
    ]


  return (
    <div className='p-2 bg-gray-50 w-full h-full min-h-- relative overflow-y-auto'>
        <div className='adjust py-10'>


            {/* WELCOME HERO HERE */}

            <div className='flex flex-col md:flex-row md:items-center gap-5 justify-between mb-5'>
                <div>
                    <h1 className=' text-2xl md:text-4xl font-poppins font-bold text-primary'>
                        Weclome back, Eric 👋!
                    </h1>
                    <p className='text-xs md:text-sm text-gray-500 font-normal'>What do you want to work on today! Oyalo is ready for your services</p>
                </div>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>


                <div>

                    {/* TODO: Links */}
                    <div className='space-x-2 space-y-3 mb-5'>
                        {
                            links.map((lnk,index)=>(
                                <CustomLink
                                    key={index}
                                    icon={lnk.icon}
                                    name={lnk.name}
                                    link={lnk.link}
                                />
                            ))
                        }
                    </div>

                    {/* Analysis */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 items-center justify-center w-full'>

                        <AnalysisCard
                            icon={<Footprints className='size-5'/>}
                            title={'Total Trips'}
                            value={'0'}
                            color={'bg-blue-200 text-blue-700'}
                        />
                        <AnalysisCard
                            icon={<Footprints className='size-5'/>}
                            title={'Total Trips'}
                            value={'0'}
                            color={'bg-blue-200 text-blue-700'}
                        />


                    </div>


                </div>

                {/* Passenger Details */}
                <div className='bg-white p-4 shadow rounded-2xl mb-6'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-montserrat text-xl font-semibold text-gray-600 flex gap2'><User className='text-blue-600'/>Profile</h1>
                            <button className='flex items-center text-blue-600 underline  text-sm' onClick={()=>setshowEditDriver(prev => !prev)}>
                                <PenLine className='size-5'/>Edit
                            </button>
                        </div>
                        <hr className='my-2'/>

                        <div className='grid grid-cols-2 gap-1'>
                            <div className='mb-4 col-span-2'>
                                <h1 className='text-gray-500 text-sm flex items-center gap-1 mb-1'><UserCheck className='size-5'/>Name</h1>
                                <p className='font-montserrat font-semibold'>John Doe</p>
                            </div>
                            <div className='mb-4'>
                                <h1 className='text-gray-500 text-sm flex items-center gap-1 mb-1'><Phone className='size-5'/>Phone</h1>
                                <p className='font-montserrat font-semibold'>0000000000</p>
                            </div>
                            <div className='mb-4'>
                                <h1 className='text-gray-500 text-sm flex items-center gap-1 mb-1'><LocateFixed className='size-5'/>Address</h1>
                                <p className='font-montserrat font-semibold'>Accra ...</p>
                            </div>
                            <div className='mb-4'>
                                <h1 className='text-gray-500 text-sm flex items-center gap-1 mb-1'><Mail className='size-5'/>Email</h1>
                                <p className='font-montserrat font-semibold'>Required*</p>
                            </div>
                            <div className='mb-4'>
                                <h1 className='text-gray-500 text-sm flex items-center gap-1 mb-1'><ListChecks className='size-5'/>Drivers License</h1>
                                <p className='font-montserrat font-semibold'>Required*</p>
                            </div>
                        </div>
                </div>

            </div>





        </div>

        {/* <h1 className='absolute left-0 right-0 text-center bottom-10 text-3xl font-montserrat font-bold text-gray-500'>Oyalo</h1> */}

    </div>
  )
}
