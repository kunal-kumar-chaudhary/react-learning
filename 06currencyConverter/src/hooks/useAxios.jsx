import { useEffect, useState } from 'react'
import axios from 'axios' 

// custom hook to fetch data from API
const useAxios = (url) => {
    // below hook will be used to store data from API
    const [data, setData] = useState([]);
    // below hook will be used to store error from API
    const [error, setError] = useState(null);
    // below hook will be used to display loading indicator
    const [loading, setLoading] = useState(false);

    useEffect(()=>{

        const fetchData = async ()=> {
            try{
                setLoading(true);
                const response = await axios(url);
                setData(response.data);
            }catch(error){
                setError(error);
            } finally{
                setLoading(false);
            }
        }

        fetchData();

    }, [url]); // everytime url changes, useEffect will run
  return [data, error, loading]
}

export default useAxios
