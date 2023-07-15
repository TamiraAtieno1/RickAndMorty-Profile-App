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
      <Link to="/character">Characters</Link>
    </div>
    </>
  )
}

export default App
