import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
 
  return (
    <>
    
    <div>
      <Link to="/">Home</Link>
    </div>
    <div>
      <Link to="/users">Characters</Link>
    </div>
    <div>
      <Link to="/users/:id">Details</Link>
    </div>
    

    </>
  )
}

export default App
