import * as React from 'react'
import { NavLink } from 'react-router-dom'

export const Welcome1: React.FC = () => {
  return (
    <div>
      <div flex justify-center items-center >
        <header b-1 b-pink >header</header>
        <main b-1 b-red grow-1>main</main>
        <footer b-1 b-blue>footer</footer>
      </div>
      <NavLink to='/welcome/2'>下一页</NavLink>
    </div>
  )
}
