import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { WelcomeLayout } from '../layouts/WelcomeLayout'
import { Welcome1 } from '../pages/welcome/welcome_1/Welcome1'
import { Welcome2 } from '../pages/welcome/welcome_2/Welcome2'
import { Welcome3 } from '../pages/welcome/welcome_3/Welcome3'
import { Welcome4 } from '../pages/welcome/welcome_4/Welcome4'
import { ErrorPage } from '../pages/error_page/ErrorPage'
import { Home } from '../pages/home/Home'

export const router = createBrowserRouter([

  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'welcome',
        element: <WelcomeLayout />,
        children: [
          { path: '1', element: <Welcome1 /> },
          { path: '2', element: <Welcome2 /> },
          { path: '3', element: <Welcome3 /> },
          { path: '4', element: <Welcome4 /> },
        ],
      },
      {
        path: '/home',
        element: <Home />
      }
    ],
  },

])
