import React from "react"
import { useLocation } from "react-router-dom"
import { useRef } from "react"

const Character =() => {
  const character = useLocation().state

  const colRef = useRef(null)

  const handleColorChange = () =>{
    colRef.current.style.backgroundColor = "white";
  }

  return (
    <div className="characters">
        <h1 className="text-white">Name:{ character.name }</h1>
        <p className="text-white">
          <div><img src={character.image} alt={character.name} /></div>
          <div>{character.status}</div>
          <div>{character.species}</div>
          <div>{character.gender}</div>
          <div>{character.origin.name}</div>
          <div  ref={colRef}>
            <button className="button rounded-full border text-red-600" onClick={handleColorChange}>
              Change color
            </button>
          </div>
        </p>
    </div>
);
  
}
export default Character;