import React from "react"
import { useLocation } from "react-router-dom"

const Character =() => {
  const character = useLocation().state

  return (
    <div className="user">
        <h1>Showing { character.name }</h1>
    </div>
);
  
}
export default Character;