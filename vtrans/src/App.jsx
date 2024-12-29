import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Landing from './pages/Landing'
import Booking from './pages/Booking'


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<Landing/>}/>
            <Route path='/booking/:id' element={<Booking/>}/>



        </Routes>
      </BrowserRouter>
    <Toaster position='top-center'/>
    </>
  )
}
