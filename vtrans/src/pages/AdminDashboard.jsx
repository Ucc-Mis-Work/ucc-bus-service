import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import images from '../constant/Images'
// import SideButton from '../component/button/SideButton'
// import { faBus, faPen, faRoad } from '@fortawesome/free-solid-svg-icons'
import { Link, Outlet, useLocation} from 'react-router-dom'
import { Avatar } from '@mui/material';

export default function AdminDashboard() {

    const location = useLocation()

  return (
        <div className='h-screen w-full bg-white p-4 flex flex-col'>
            <div className='w-full h-[30%] rounded-2xl overflow-hidden relative'>
                <img src={images.bus5} alt="" className='w-full h-full object-cover absolute'/>
                <div className='relative bg-black/65 h-full p-4'>
                        <header className='flex items-center justify-between mb-3'>
                            <h1 className='text-white font-bold font-montserrat text-xl'>VTrans.</h1>

                            <nav className='text-white space-x-6'>
                                <Link to={'vehicles'} className={`${location.pathname.includes('vehicles')?'p-2 bg-blue-600/35':'bg-transparent'} rounded-md`}>
                                    Vehicles
                                </Link>

                                <Link to={'allroutes'} className={`${location.pathname.includes('allroutes')?'p-2 bg-blue-600/35':'bg-transparent'} rounded-md`}>
                                    Routes
                                </Link>
                            </nav>

                            <Avatar/>
                        </header>

                        <h2 className="text-lg text-center text-white font-bold font-montserrat pt-14">
                            <Typewriter
                                words={['Hello, world!', 'Welcome to React!', 'Typewriter effect is cool!']}
                                loop={true}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h2>
                </div>

            </div>

            <div className='flex-1 overflow-hidden'>
                <Outlet/>
            </div>

    </div>
  )
}

{/* <div className='h-full relative bg-black/15'>
    <div className='bg-black/85 w-full h-full shadow-xl flex'>
        <aside className=' md:w-[5%] ease-in-out duration-300 hover:w-[20%] bg-white h-full group p-2 md:p-4 border-r-2'>
            <SideButton
                icon={faBus}
                title={'Add Vehicle'}
                link={'registervehicle'}
            />
            <SideButton
                icon={faPen}
                title={'Set Routes'}
                link={'newroute'}
            />
            <SideButton
                icon={faRoad}
                title={'All Routes'}
                link={'allroutes'}
            />
        </aside>
        <div className='flex-1'>
            <Outlet/>
        </div>
    </div>

</div> */}
