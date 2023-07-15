import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
 
  return (
    <>
    
    <div>
      <Link to="/" class="text-white">Home</Link>
    </div>
    <div>
      <Link to="/character" class="text-white">Characters</Link>
    </div>
    </>
  )
}

export default App
