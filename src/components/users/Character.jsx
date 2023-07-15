import React from "react"
import { useLocation } from "react-router-dom"

const Character =() => {
  const character = useLocation().state

  return (
    <div className="user">
        <h1 className="text-white">Showing { character.name }</h1>
        <p className="text-white">
          <div>{character.status}</div>
          <div>{character.species}</div>
          <div>{character.gender}</div>
          <div>{character.origin.name}</div>
        </p>
    </div>
);
  
}
export default Character;