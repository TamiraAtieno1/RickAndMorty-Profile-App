import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";


const CharacterList = ()=> {
    const [characters, setCharacters] = useState ([])

    const fetchCharacters = async ()=>{
        const response = await fetch("https://rickandmortyapi.com/api/character")
        const data = await response.json()
        console.log(data.results)
        setCharacters(data.results)
    }

    useEffect(()=>{
        fetchCharacters()
    }, [])

    const [search, setSearch] = useState('')
    console.log(search)

    return (
        <>
        <Link to="/">Home</Link>
        <form>
            <input type="text" 
            onChange={e => setSearch(e.target.value)} placeholder="Search characters..."/>
        </form>
        <div>
            {characters.filter((character)=>{
                return search.toLowerCase() === '' ? character : character.name.toLowerCase().includes(search);
            }).map((character)=>{
                return (
                <>
                <div>
                <div class="py-8 px-8 max-w-sm mx-auto bg-slate-700 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                    <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={character.image} alt={character.name} />
                    <div class="text-center space-y-2 sm:text-left">
                        <div class="space-y-0.5">
                        <p class="text-lg text-black font-semibold">
                        {character.name}
                        </p>
                        </div>
                        <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                        <Link to={`/character/${character.id}`} state={character}>View Character</Link>
                        </button>
                    </div>
                </div>
                </div>
                </>
            )})}
        </div>
        </>
    )
    // <div key={character.id}>
    //             <div>{character.name}</div>
    //             <img src={character.image} alt={character.name} />
    //             <Link to={`/users/${character.id}`} state={character}>View Character</Link>
    //           </div>
    
}


export default CharacterList;