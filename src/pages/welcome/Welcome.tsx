import * as React from 'react'
import { useNavigate } from 'react-router-dom'

export const Welcome: React.FC = () => {
  const nav = useNavigate()

  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('++++')
    nav('/welcome/1')
  }, [])
  return null
}
