import React, { useEffect } from 'react'
import { AnalysisCard } from '../../component/Card/new/AnalysisCard'
import { Book, Construction, Footprints, ListCheck, ListChecks, LocateFixed, Mail, PenLine, Phone, Search, User, UserCheck } from 'lucide-react'
import { CustomLink } from '../../component/button/CustomLink'
import { Button, Dialog, DialogContent, Divider, LinearProgress } from '@mui/material'
import { useUser } from '@clerk/clerk-react';
import OyaloBackground from '../../component/OyaloBackground'
import { useState } from 'react'
import DBSyncForm from '../../component/form/DBSyncForm'

export default function PassengerLanding() {

    const {isSignedIn, user, isLoaded } =  useUser()
    const links = [
        {
            name:'Search Route',
            link:'',
            icon:<Search className='size-5 group-hover:scale-110 transition-transform'/>
        },
        {
            name:'Book A Trip',
            link:'/passenger/booktrip',
            icon:<Book className='size-5 group-hover:scale-110 transition-transform'/>
        },
        {
            name:'My Trips',
            link:'/passenger/mytrips/1',
            icon:<Construction className='size-5 group-hover:scale-110 transition-transform'/>
        },
    ]
    const [DBSync,setDBSync]=useState(false)



    if (!isLoaded) return <div className='flex items-center justify-center h-screen'><LinearProgress/></div>

    console.log(user);

    // TODO : Check if user ClerkId exists ---
        // Not existing . POP up to register or Update details
    if(!DBSync){
        return <DBSyncForm/>
    }

        
    
    

    if(isSignedIn){
        return (
          <div className='p-4 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen'>
              <div className='max-w-6xl mx-auto py-8'>
      
                  {/* Welcome Section */}
                  <div className='flex flex-col md:flex-row justify-between items-start mb-8'>
                      <div className='mb-6 md:mb-0'>
                          <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-2'>
                              Welcome back, {user.firstName} 👋 {/*user.id*/}
                          </h1>
                          <p className='text-gray-500 text-sm md:text-base'>
                              Ready for your next adventure? Let's make it happen!
                          </p>
                      </div>
                      <div className='bg-white p-4 rounded-xl shadow-sm w-full md:w-auto'>
                          <div className='flex gap-4'>
                              {links.map((lnk, index) => (
                                  <CustomLink
                                      key={index}
                                      icon={lnk.icon}
                                      name={lnk.name}
                                      link={lnk.link}
                                      className="flex-1 md:flex-none"
                                  />
                              ))}
                          </div>
                      </div>
                  </div>
      
                  {/* Stats Dashboard */}
                  <div className='grid md:grid-cols-2 gap-6 mb-8'>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                          <div>
                              <AnalysisCard
                                  icon={<Footprints className='size-6 text-blue-600'/>}
                                  title={'Completed Trips'}
                                  value={'12'}
                                  color={'bg-blue-100'}
                                  trend='+4% from last month'
                              />
                          </div>
      
                          <div>
                              <AnalysisCard
                                  icon={<ListCheck className='size-6 text-green-600'/>}
                                  title={'Upcoming Trips'}
                                  value={'3'}
                                  color={'bg-green-100'}
                                  trend='2 new this week'
                              />
                          </div>
                      </div>
      
                      {/* Profile Card */}
                      <div className='bg-white p-6 rounded-xl shadow-sm'>
                          <div className='flex justify-between items-start mb-10'>
                              <div>
                                  <h2 className='text-xl font-semibold text-gray-800 flex items-center gap-2'>
                                      <User className='text-blue-600 size-6'/>
                                      Passenger Profile
                                  </h2>
                                  <p className='text-sm text-gray-500 mt-1'>Manage your personal information</p>
                              </div>
                              <button className='flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors'>
                                  <PenLine className='size-5'/>
                                  <span className='hidden md:inline'>Edit Profile</span>
                              </button>
                          </div>
      
                          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                              <ProfileDetail 
                                  icon={<UserCheck className='size-5 text-gray-500'/>}
                                  label="Full Name"
                                  value={user.fullName}
                              />
                              <ProfileDetail 
                                  icon={<Phone className='size-5 text-gray-500'/>}
                                  label="Phone Number"
                                  value="+1 (555) 123-4567"
                              />
                              <ProfileDetail 
                                  icon={<Mail className='size-5 text-gray-500'/>}
                                  label="Email"
                                  value={user.emailAddresses[0]?.emailAddress}
                              />
                              <ProfileDetail 
                                  icon={<LocateFixed className='size-5 text-gray-500'/>}
                                  label="Primary Address"
                                  value="Accra, Ghana"
                              />
                          </div>
                      </div>
                  </div>
      
                  {/* Recent Activity Section */}
                  <div className='bg-white p-6 rounded-xl shadow-sm'>
                      <h3 className='text-lg font-semibold font-montserrat mb-4 flex items-center gap-2'>
                          <ListChecks className='size-5 text-purple-600'/>
                          Recent Trips
                      </h3>
                      <Divider sx={{my:4}}/>
                      <div className='space-y-4'>
                          <TripItem 
                              date="2024-03-15"
                              route="Accra to Kumasi"
                              status="Completed"
                          />
                          <TripItem 
                              date="2024-03-18"
                              route="Kumasi to Tamale"
                              status="Upcoming"
                          />
                      </div>
                  </div>
      
              </div>
          </div>
        )
    }else{
        return (
            <Dialog open={true}>
                <DialogContent>
                    <h1 className='font-montserrat text-xl font-bold text-gray-700 mb-10'>Login to Continue</h1>

                    <Button sx={{background:'red',color:'white'}} fullWidth>
                        Login
                    </Button>
                </DialogContent>
            </Dialog>
        )
    }


}







const ProfileDetail = ({ icon, label, value }) => (
    <div className='flex items-start gap-3 font-montserrat'>
        <span className='mt-1'>{icon}</span>
        <div>
            <p className='text-xs text-gray-500'>{label}</p>
            <p className='font-medium text-gray-800 truncate text-sm'>{value}</p>
        </div>
    </div>
)

const TripItem = ({ date, route, status }) => (
    <div className='flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors border-b-[1px]'>
        <div>
            <p className='text-sm text-gray-500'>{date}</p>
            <p className='font-medium'>{route}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
            status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
        }`}>
            {status}
        </span>
    </div>
)