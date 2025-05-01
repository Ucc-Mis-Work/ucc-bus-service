// components/ProtectedRoute.jsx
import React from 'react'
import { useAuth } from '@clerk/clerk-react'
import { Navigate, useLocation } from 'react-router-dom'
import { LinearProgress } from '@mui/material'

export default function ProtectedRoute({ children, redirectTo }) {
  const { isSignedIn, isLoaded } = useAuth()

  if (!isLoaded) return <div className='flex items-center justify-center h-screen'><LinearProgress/></div>

  const fallbackRedirect = `/`

  return isSignedIn ? children : (
    <Navigate to={redirectTo || fallbackRedirect} replace />
  )
}

