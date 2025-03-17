import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Landing from './pages/Landing'
import Booking from './pages/Booking'
import SeatButtonTest from './pages/SeatButtonTest'
import Payment from './pages/Payment'
import AdminLanding from './pages/AdminLanding'
import AdminDashboard from './pages/AdminDashboard'
import AllRoutes from './pages/AllRoutes'
import Vehicle from './pages/Vehicle'
import AllAvailableRoutes from './pages/AllAvailableRoutes'
import SetRoutes from './pages/setRoute/SetRoutes'
import DriverLogin from './pages/DriversPortal/DriverLogin'
import D_Layout from './pages/DriversPortal/D_Layout'
import DriverRegister from './pages/DriversPortal/DriverRegister'
import DriverLanding from './pages/DriversPortal/DriverLanding'
import TestPage from './pages/TestPage'
import AddVehicle from './pages/DriversPortal/AddVehicle'
import DriverJournies from './pages/DriversPortal/DriverJournies'
import DriverRoutesSelect from './pages/DriversPortal/DriverRoutesSelect'
import NotFound from './pages/NotFound'
import PassengerLogin from './pages/Passengers/PassengerLogin'
import PassengerLanding from './pages/Passengers/PassengerLanding'
import BookTrip from './pages/Passengers/BookTrip'
import PassengerTrips from './pages/Passengers/PassengerTrips'


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>


            <Route path='*' element={<NotFound/>}/>
            <Route index element={<Landing/>}/>
            <Route path='/home' element={<Landing/>}/>
            <Route path='/booking/:id' element={<Booking/>}/>
            <Route path='/payment' element={<Payment/>}/>


            {/* Passengers */}
            <Route path='/passenger/login' element={<PassengerLogin/>} />
            <Route path='/passenger' element={<D_Layout/>}>
                <Route index element={<PassengerLanding/>} />
                <Route path='main' element={<PassengerLanding/>}/>
                <Route path='booktrip' element={<BookTrip/>}/>
                <Route path='mytrips/:id' element={<PassengerTrips/>}/>
            </Route>













            {/* Admin */}
            <Route path='/admin' element={<AdminLanding/>}/>
            <Route path='/routes' element={<AllAvailableRoutes/>}/>
            <Route path='/admin/dashboard' element={<AdminDashboard/>}>
                <Route path='vehicles' element={<Vehicle/>}/>
                <Route path='allroutes' element={<AllRoutes/>}/>
            </Route>
            <Route path='admin/newroute' element={<SetRoutes/>}>

            </Route>

            <Route path='/seatbutton' element={<SeatButtonTest/>}/>








            {/* Drivers */}
            <Route path='/driver/login' element={<DriverLogin/>}/>
            <Route path='/driver/register' element={<DriverRegister/>}/>
            <Route path='/driver' element={<D_Layout/>}>
                <Route index element={<DriverLanding/>} />
                <Route path='main' element={<DriverLanding/>}/>
                <Route path='addvehicle' element={<AddVehicle/>}/>
                <Route path='myjourney' element={<DriverJournies/>}/>
                <Route path='setroute' element={<DriverRoutesSelect/>}/>
            </Route>


            <Route path='/testpage' element={<TestPage/>}/>
        </Routes>
      </BrowserRouter>

    <Toaster position='top-center'/>
    </>
  )
}
