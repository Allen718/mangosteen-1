import * as React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

export const MainLayout: React.FC = () => {
  const hasRead = localStorage.getItem('hasReadWelcomes')
  const location = useLocation()

  if (hasRead === 'yes') {
    return <Navigate to="/home" />
  } else if (location.pathname === '/') {
    return <Navigate to="/welcome/1" />
  } else {
    return <div><Outlet /></div>
  }
}
