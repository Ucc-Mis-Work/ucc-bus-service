// App.jsx
<<<<<<< Updated upstream
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Landing from './pages/Landing'
import Booking from './pages/Booking'
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
import ProtectedRoute from './component/ProtectedRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <NotFound />,
  },
  {
    path: '/home',
    element: <Landing />,
  },
  {
    path: '/booking/:id',
    element: <Booking />,
  },
  {
    path: '/payment',
    element: <Payment />,
  },
  {
    path: '/passenger/login',
    element: <PassengerLogin />,
  },
  {
    path: '/passenger',
    element: (
      <ProtectedRoute redirectTo="/passenger/login">
        <D_Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <PassengerLanding />,
      },
      {
        path: 'main',
        element: <PassengerLanding />,
      },
      {
        path: 'booktrip',
        element: <BookTrip />,
      },
      {
        path: 'mytrips/:id',
        element: <PassengerTrips />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLanding />,
  },
  {
    path: '/routes',
    element: <AllAvailableRoutes />,
  },
  {
    path: '/admin/dashboard',
    element: (
      <ProtectedRoute redirectTo="/admin">
        <AdminDashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'vehicles',
        element: <Vehicle />,
      },
      {
        path: 'allroutes',
        element: <AllRoutes />,
      },
    ],
  },
  {
    path: '/admin/newroute',
    element: (
      <ProtectedRoute redirectTo="/admin">
        <SetRoutes />
      </ProtectedRoute>
    ),
  },
  {
    path: '/driver/login',
    element: <DriverLogin />,
  },
  {
    path: '/driver/register',
    element: <DriverRegister />,
  },
  {
    path: '/driver',
    element: (
      <ProtectedRoute redirectTo="/driver/login">
        <D_Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DriverLanding />,
      },
      {
        path: 'main',
        element: <DriverLanding />,
      },
      {
        path: 'addvehicle',
        element: <AddVehicle />,
      },
      {
        path: 'myjourney',
        element: <DriverJournies />,
      },
      {
        path: 'setroute',
        element: <DriverRoutesSelect />,
      },
    ],
  },
  {
    path: '/testpage',
    element: <TestPage />,
  },
])



export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </>
  )
}

=======
>>>>>>> Stashed changes
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Landing from './pages/Landing'
import Booking from './pages/Booking'
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
import ProtectedRoute from './component/ProtectedRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <NotFound />,
  },
  {
    path: '/home',
    element: <Landing />,
  },
  {
    path: '/booking/:id',
    element: <Booking />,
  },
  {
    path: '/payment',
    element: <Payment />,
  },
  {
    path: '/passenger/login',
    element: <PassengerLogin />,
  },
  {
    path: '/passenger',
    element: (
      <ProtectedRoute redirectTo="/passenger/login">
        <D_Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <PassengerLanding />,
      },
      {
        path: 'main',
        element: <PassengerLanding />,
      },
      {
        path: 'booktrip',
        element: <BookTrip />,
      },
      {
        path: 'mytrips/:id',
        element: <PassengerTrips />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLanding />,
  },
  {
    path: '/routes',
    element: <AllAvailableRoutes />,
  },
  {
    path: '/admin/dashboard',
    element: (
      <ProtectedRoute redirectTo="/admin">
        <AdminDashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'vehicles',
        element: <Vehicle />,
      },
      {
        path: 'allroutes',
        element: <AllRoutes />,
      },
    ],
  },
  {
    path: '/admin/newroute',
    element: (
      <ProtectedRoute redirectTo="/admin">
        <SetRoutes />
      </ProtectedRoute>
    ),
  },
  {
    path: '/driver/login',
    element: <DriverLogin />,
  },
  {
    path: '/driver/register',
    element: <DriverRegister />,
  },
  {
    path: '/driver',
    element: (
      <ProtectedRoute redirectTo="/driver/login">
        <D_Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DriverLanding />,
      },
      {
        path: 'main',
        element: <DriverLanding />,
      },
      {
        path: 'addvehicle',
        element: <AddVehicle />,
      },
      {
        path: 'myjourney',
        element: <DriverJournies />,
      },
      {
        path: 'setroute',
        element: <DriverRoutesSelect />,
      },
    ],
  },
  {
    path: '/testpage',
    element: <TestPage />,
  },
])



export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </>
  )
}
