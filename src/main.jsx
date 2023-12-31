import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'
import CharacterList from './components/users/CharacterList.jsx'
import Characters from './components/users/Characters.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/character',
    element: <CharacterList/>
  },
  {
    path: '/character/:id',
    element: <Characters/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
