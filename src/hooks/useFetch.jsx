import { useState, useEffect } from "react";


const useFetch = (url) =>{
    const[data, setData]=useState([]);

    const[loading, setLoading]=useState(true);

    const fetchData = async()=>{
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
    };

    useEffect(()=>{
        fetchData()
        setLoading(false)

    },[])

    return {data, loading}
}

export default useFetch;