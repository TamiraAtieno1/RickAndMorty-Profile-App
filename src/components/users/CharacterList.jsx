import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";



const CharacterList = ()=> {

    const { data: characters, loading} = useFetch("https://rickandmortyapi.com/api/character")

    // const [characters, setCharacters] = useState ([])

    // const fetchCharacters = async ()=>{
    //     const response = await fetch("https://rickandmortyapi.com/api/character")
    //     const data = await response.json()
    //     console.log(data.results)
    //     setCharacters(data.results)
    // }

    // useEffect(()=>{
    //     fetchCharacters()
    // }, [])

    const [search, setSearch] = useState('')
    console.log(search)

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <>
        <Link to="/" className="text-white">Home</Link>
        <form>
            <input type="text" className="px-2 py-1 rounded"
            onChange={e => setSearch(e.target.value)} placeholder="Search characters..."/>
        </form>
        <div className="flex flex-wrap ">
            {characters.results.filter((character)=>{
                return search.toLowerCase() === '' ? character : character.name.toLowerCase().includes(search);
            }).map((character)=>{
                return (
                <div className="mx-2 my-2" key={character.id}>
                    <div class="py-8 px-8 max-w-sm mx-auto bg-slate-700 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                      <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={character.image} alt={character.name} />
                    <div class="text-center space-y-2 sm:text-left"></div>
                            <div className="space-y-0.5">
                            <p className="text-sm text-black font-semibold">
                            {character.name}
                            </p>
                            </div> 
                            <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" >
                            <Link to={`/character/${character.id}`} state={character}>View Character</Link>
                            </button>
                    </div>
                </div>
                        

                    
                
            )})}
        </div>
        </>
    )
}


export default CharacterList;