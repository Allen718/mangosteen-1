import * as React from 'react'
import { useNavigate } from 'react-router-dom'

export const Welcome: React.FC = () => {
  const nav = useNavigate()

  React.useEffect(() => {
    nav('/welcome/1')
  }, [])
  return null
}
