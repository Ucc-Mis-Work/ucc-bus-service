import React, { useState } from 'react'
import Images from '../../constant/Images'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'
import { BusFrontIcon, CarFront, CarFrontIcon, Coins, Construction, Eye, EyeClosed, Footprints, KeySquare, ListChecks, LocateFixed, Mail, Map, MapIcon, Pen, PenIcon, PenLine, Phone, Trash, User, UserCheck, Users, Users2 } from 'lucide-react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import EditDriverForm from '../../component/form/EditDriverForm'
import EditDriverVehicleForm from '../../component/form/EditDriverVehicleForm'

export default function DriverLanding() {

    const [showBalance,setshowBalance] = useState(false)
    const [expand,setexpand] = useState(false)
    const [showEditDriver,setshowEditDriver] = useState(false)
    const [showEditVehicle,setshowEditVehicle] = useState(false)

    const CustomLink = ({icon,name,link})=>{
        return (
            <Link to={link} className='inline-grid min-w-max'>
                <h1 className='py-3 px-6 bg-yellow-400 hover:bg-yellow-400/80 rounded-2xl flex items-center gap-2 group font-medium hover:text-gray-600 text-blue-900 text-sm'>
                    {icon}
                    {name}
                </h1>
            </Link>
        )
    }

    const AnalysisCard = ({icon,title,value,color})=>{
        return (
            <div className='flex flex-col bg-white rounded-2xl shadow p-4 gap-2'>
                <div className={`p-2 ${color} rounded-lg max-w-min`}>
                    {icon}
                </div>
                <p className='text-xs md:text-sm font-montserrat text-gray-600'>{title}</p>
                <p className='font-poppins font-semibold text-lg md:text-2xl'>{value}</p>
            </div>
        )
    }

    // TODO : Plate, Type Eg: , Capacity ,
    const BusCard = ({car_plate,capacity,type,handleEdit})=>{
        return(
            <button className='p-3 bg-gray-100 rounded-xl flex items-start justify-between w-full gap-6 mb-2'>
                <div className='flex-1' onClick={()=>setexpand((prev)=>!prev)}>
                    <h1 className='flex items-center text-sm gap-2 text-primary font-medium mb-1'><KeySquare className=''/>{car_plate}</h1>

                    {expand && <div>
                        <hr className='my-3'/>

                        <h1 className='text-sm font-medium flex gap-2 mb-2'><Users2 className='size-5'/>Capacity:
                        <span className='font-semibold mx-1 text-blue-800'>
                            {capacity}
                        </span>
                    </h1>

                    <h1 className='text-sm font-medium flex gap-2'><CarFrontIcon className='size-5'/>Vehicle Type:
                        <span className='font-semibold mx-1 text-blue-800'>
                            {type}
                        </span>
                    </h1>
                        </div>
                    }


                </div>

                <div className='space-x-2'>
                    <button className='p-2 bg-blue-200 rounded-xl' onClick={handleEdit}>
                        <PenIcon className='size-4 text-blue-700'/>
                    </button>
                    <button className='p-2 bg-red-200 rounded-xl'>
                        <Trash className='size-4 text-red-700'/>
                    </button>

                </div>
            </button>
        )
    }



    const links = [
        {
            name:'Add Your Vehicle',
            link:'/driver/addvehicle',
            icon:<CarFront className='group-hover:scale-110 group-hover:text-white duration-150'/>
        },
        {
            name:'Set Up Route',
            link:'/driver/setroute',
            icon:<Footprints className='group-hover:scale-110 group-hover:text-white duration-150'/>
        },
        {
            name:'My Journies',
            link:'/driver/myjourney',
            icon:<Construction className='group-hover:scale-110 group-hover:text-white duration-150'/>
        },
    ]

  return (
    <div className='p-2  bg-gray-50 w-full'>
        <div className='adjust py-10'>


            {/* WELCOME HERO HERE */}

            <div className='flex flex-col md:flex-row md:items-center gap-5 justify-between mb-5'>
                <div>
                    <h1 className=' text-2xl md:text-4xl font-poppins font-bold text-primary'>
                        Weclome back, Eric 👋!
                    </h1>
                    <p className='text-xs md:text-sm text-gray-500 font-normal'>What do you want to work on today! Oyalo is ready for your services</p>
                </div>

                {/* Balance */}
                <div>
                    <h1 className='text-sm text-gray-600'>Oyalo Balance</h1>
                    <div className='flex items-center gap-6'>
                        {/* Amount */}
                        <h1 className='font-montserrat font-semibold text-lg'>GH₵ {showBalance? '0000.00':'*****.**'}</h1>

                        {/* Toggle show Value and Hash Value */}
                        <button className='p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-primary' onClick={()=>setshowBalance((prev)=>!prev)}>
                            {
                                showBalance? <EyeClosed className='size-5 text-blue-800'/>:
                                <Eye className='size-5 text-blue-800'/>
                            }
                        </button>
                    </div>
                </div>

            </div>


            {/* TODO Analysis tabs */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6 items-center justify-center w-full'>
                <AnalysisCard
                    icon={<MapIcon className='size-5'/>}
                    title={'Total Trips Made'}
                    value={12}
                    color={'bg-blue-200 text-blue-700'}
                />
                <AnalysisCard
                    icon={<Users className='size-5'/>}
                    title={'Upcoming Trip Passenger'}
                    value={'12/100'}
                    color={'bg-blue-200 text-blue-700'}
                />
                <AnalysisCard
                    icon={<BusFrontIcon className='size-5'/>}
                    title={'My Buses'}
                    value={12}
                    color={'bg-blue-200 text-blue-700'}
                />
                <AnalysisCard
                    icon={<Coins className='size-5'/>}
                    title={'Total Earnings GH₵'}
                    value={12000}
                    color={'bg-blue-200 text-blue-700'}
                />
            </div>

            {/* TODO: Links */}
            <div className='space-x-2 space-y-3 my-5'>
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

            {/* Personal & Vehicles Details */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>

                {/* Driver Details */}
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


                {/* Driver Vehicle(s) */}
                <div className='bg-white p-4 shadow rounded-2xl mb-6'>
                    <div>
                        <h1 className='font-montserrat text-xl font-semibold text-gray-600 flex gap2'><BusFrontIcon  className='text-blue-600'/>My Buses</h1>
                    </div>
                    <hr className='my-2'/>

                    <div className=''>
                        <BusCard
                            handleEdit={()=>setshowEditVehicle(prev => !prev)}
                            car_plate={'GN-2233-27'}
                            capacity={100}
                            type={'Sprinter'}
                        />

                    </div>
                </div>
            </div>

        </div>

        {/* TODO: Loading..... */}


        {/* TODO: Dailog For Editting Drivers Details */}
        <Dialog open={showEditDriver} fullWidth>
            <DialogTitle>
                <div>
                    <h1 className='text-sm text-gray-500'>Oyalo</h1>
                    <p className='font-montserrat font-semibold text-primary'>Edit Your Details</p>
                </div>
            </DialogTitle>
            <DialogContent>
                <EditDriverForm/>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=> setshowEditDriver(prev=>!prev)}>
                    CLOSE
                </Button>
            </DialogActions>
        </Dialog>


        {/* TODO: Dailog For Editting Drivers Details */}
        <Dialog open={showEditVehicle} fullWidth>
            <DialogTitle>
                <div>
                    <h1 className='text-sm text-gray-500'>Oyalo</h1>
                    <p className='font-montserrat font-semibold text-primary'>Edit Your Vehicle</p>
                </div>
            </DialogTitle>
            <DialogContent>
                <EditDriverVehicleForm/>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=> setshowEditVehicle(prev=>!prev)}>
                    CLOSE
                </Button>
            </DialogActions>
        </Dialog>


        {/* TODO: */}
        
    </div>
  )
}
