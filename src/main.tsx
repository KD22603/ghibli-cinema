import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage.tsx'
import BrowsePage from './pages/BrowsePage.tsx'
import MovieDetails from './pages/MovieDetails.tsx'
import MyTickets from './pages/MyTickets.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage/>,
       
      },
      {
        path:"browse",
        element:<BrowsePage/>
      },
      {
        path:"browse/:id",
        element:<MovieDetails/>
      },
      {
        path:"/:id",
        element:<MovieDetails/>
      },
      {
        path:"tickets",
        element:<MyTickets/>
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router } />
  </React.StrictMode>,
)
