import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        setTimeout(() => {                            // This sets a time of 1 minutes before the fetch occurs...............NB this is a demo not applicable in real world Apps
        fetch(url)                                    // Send an HTTP GET request to the specified URL
            .then(res =>{
                if(!res.ok){
                    throw Error('Could not fetch the data for that resource !!');       // Implementing Error messages
                }
                return res.json();                  // Parse the response as JSON
            })
            .then(data =>{
                setData(data);          
                setisLoading(false);
                setError(null);                 
            })               
            .catch(err=> {
                setisLoading(false)                  
                setError(err.message)         
            })
            
        }, 800);
   

    }, [url]);

    return{error, data,isLoading}

}

export default useFetch
 