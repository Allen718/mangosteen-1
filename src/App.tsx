import { router } from './routes/router'
import { Navigate, RouterProvider } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
