import * as React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useLocalStore } from '../stores/useStoreLocal'

export const MainLayout: React.FC = () => {
  const location = useLocation()
  const { hasReadWelcomes } = useLocalStore()
  if (hasReadWelcomes) {
    return <Navigate to="/home" />
  } else if (location.pathname === '/') {
    return <Navigate to="/welcome/1" />
  } else {
    return <div><Outlet /></div>
  }
}
