import { useState, useEffect } from "react";


const useFetch = (url) =>{
    const[data, setData]=useState([]);

    const[loading, setLoading]=useState(true);

    const fetchData = async() => {
        try {
            setLoading(true)
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
        
    };

    useEffect(()=>{
        // setLoading(true)
        fetchData()
    },[url])

    return {data, loading}
}

export default useFetch;