import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import Loading from './Loading'
import axios from 'axios'

export default function News(props) {
    const{func} = props

    const [strings, setStrings] = useState([]);
    const[loadingState,setLoadingState] = useState(true)

    function hideLoading(){
      setLoadingState(false)
    }

    useEffect(()=>{
      const fetchData = async () => {
        try{
          const response = await axios.get('http://localhost:8080/api/titles');
          const data = response.data;
          const newStrings = data.slice(2);
          setStrings(newStrings);
        } catch(error){
          console.log('Error fetching data: ',error);
        }
        
        hideLoading();
      }
      fetchData();
    },[]);

  return (
    <>
      {loadingState && <Loading /> }
      {(!loadingState) && <div className= 'mb-2 h-screen gap-6 place-items-center p-4 grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1'>
        {strings.map((string, i)=>(
          <NewsCard onClick={func} string={string} key={i} dataKey={i} />
        ))}
      </div>}
    </>
  )
}
