import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'
import UserList from './components/users/Userlist.jsx'
import User from './components/users/User.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/users',
    element: <UserList/>
  },
  {
    path: '/users/:id',
    element: <User/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
