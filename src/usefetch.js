
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [Data,setData] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
   const [error,setError] = useState(null);
   
        useEffect(()=>{
          const abortcon = new AbortController()
            fetch(url,{signal:abortcon.signal}).then(res =>{
             if(!res.ok){
              throw Error(Error);
              
             }
              return res.json();
            }).then(data=>{
              setData(data)
              setIsLoading(false)
              setError(null)
            }).catch(err=>{
              if(err.name === 'AbortError'){
                console.log('helo')
              }else{
                setError(err.message)
                setIsLoading(false)
              }
            })
             return ()=>{
              abortcon.abort()
              }
          },[url])
          
    return {Data, isLoading, error}
   

}
 
export default useFetch;