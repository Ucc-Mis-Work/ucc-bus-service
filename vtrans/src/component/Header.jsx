import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import FlyOutNavButton from './button/FlyOutNavButton'
import { Car, User2Icon } from 'lucide-react'
import { AppRegistrationRounded } from '@mui/icons-material'

export default function Header() {
    const location = useLocation()
    const [userLinks,setuserLinks] = useState([])



    const CustomLink =({name,link})=>{

        return(
            <Link to={link}>
                <button className='py-3 px-6'>
                    {name}
                    <div className={location.pathname.includes(link)?'size-2 bg-blue-400 rounded-full block':'hidden'}></div>
                </button>
            </Link>
        )
    }

    const  links =[
        {
            name:'Home',
            link:'/home'
        },
        {
            name:'Help',
            link:'/help'
        },
    ]

    const adminlinks = [
        {
            name:'Dashboard',
            link:'/admin/dashboard/allroutes'
        },
    ]


    const fetchLinks = ()=>{
        if(location.pathname.includes('/admin/')){
            setuserLinks(adminlinks)
        }else{
            setuserLinks(links)
        }
    }

    const Flyoutsublink = ({link,title,description})=>{
        return (
            <div>
                <Link to={link} className='group'>
                    <h1 className='font-poppins text-teal-900 font-semibold group-hover:translate-x-4 duration-200'>{title}</h1>
                    <p className='text-gray-600 text-xs'>{description}</p>
                </Link>
            </div>
        )
    }

    const accessLinks = ()=>{
        return(
            <div className='p-6 relative min-w-max grid grid-cols-2 gap-4 bg-white text-black'>

                {/* Passenger */}
                <div className='p-2'>
                    <p className='flex font-montserrat font-semibold text-gray-800 '>
                        <User2Icon className='text-blue-600 mr-2'/>Passenger
                    </p>
                    <hr className='my-3'/>

                    <div className='space-y-4'>
                        <Flyoutsublink
                            link={''}
                            title={'Register With Oyalo.'}
                            description={'Create an account and enjoy your journey with Oyalo.'}
                        />
                        <Flyoutsublink
                            link={''}
                            title={'Book A Ticket.'}
                            description={'Let Start the journey with a ticket.'}
                        />
                        <Flyoutsublink
                            link={''}
                            title={'Search For Routes.'}
                            description={'Where would you lik to go.'}
                        />

                    </div>
                </div>


                <div className='p-2'>
                    <p className='flex font-montserrat font-semibold text-gray-800 '>
                        <Car className='text-blue-600 mr-2'/>Driver
                    </p>
                    <hr className='my-3'/>

                    <div className='space-y-4'>
                        <Flyoutsublink
                            link={'/driver/register'}
                            title={'Create An Account'}
                            description={'Register with Oyalo for the best transport deals'}
                        />

                        <Flyoutsublink
                            link={'/driver/login'}
                            title={'Register Your Vehicle With Oyalo.'}
                            description={'Create an account and enjoy your journey with Oyalo.'}
                        />
                        <Flyoutsublink
                            link={'/driver/login'}
                            title={'Set Up Journey.'}
                            description={'Where would you like take your passengers.'}
                        />

                    </div>
                </div>

                <div>
                    Driver
                </div>

            </div>
        )
    }


    useEffect(()=>{
        fetchLinks()
    },[])


  return (
    <div className='backdrop-blur-md p-2 sticky top-0 z-20 shadow-xl bg-primary text-white'>
      <div className='flex items-center justify-between adjust'>
        <Link to={'/'}>
            <h1 className='font-bold text-lg'>Oyalo...🚌</h1>
        </Link>

        <FlyOutNavButton
            FlyoutContent={accessLinks}
        >
            What We Have
        </FlyOutNavButton>


        <nav>
            {
                userLinks.map((link,index)=>(
                    <CustomLink
                        name={link.name}
                        link={link.link}
                    />
                ))
            }

        </nav>
      </div>
      <div>

            {/* {accessLinks()} */}
      </div>
    </div>
  )
}
