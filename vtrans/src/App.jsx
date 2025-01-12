import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Landing from './pages/Landing'
// import NursingResultPage from './pages/NursingResultPage'
// import NursingNew from './pages/NursingNew'
import Booking from './pages/Booking'
import SeatButtonTest from './pages/SeatButtonTest'
import Payment from './pages/Payment'
import AdminLanding from './pages/AdminLanding'
import AdminDashboard from './pages/AdminDashboard'
import SetRoutes from './pages/SetRoutes'
import AllRoutes from './pages/AllRoutes'
import Vehicle from './pages/Vehicle'


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<Landing/>}/>
            <Route path='/booking/:id' element={<Booking/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/admin' element={<AdminLanding/>}/>
            <Route path='/admin/dashboard' element={<AdminDashboard/>}>
                <Route path='vehicles' element={<Vehicle/>}/>
                <Route path='newroute' element={<SetRoutes/>}/>
                <Route path='allroutes' element={<AllRoutes/>}/>
            </Route>

            <Route path='/seatbutton' element={<SeatButtonTest/>}/>


{/* 
            <Route path='/nursing/result' element={<NursingResultPage/>}/>
            <Route path='/result' element={<NursingNew/>}/> */}
        </Routes>
      </BrowserRouter>
    <Toaster position='top-center'/>
    </>
  )
}
