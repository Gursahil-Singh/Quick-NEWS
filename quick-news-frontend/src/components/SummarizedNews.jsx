import React, { useEffect, useState } from 'react'
import Button from './Button'
import axios from 'axios'

export default function SummarizedNews(props) {
  const{func,dataKey} = props
  const[title,setTitle] = useState("")
  const[summary,setSummary] = useState("")
  const[link,setLink] = useState("")
  const[popup,setPopup] = useState(false)
  const[saved,setSaved] = useState(false)

  function saveArticle(){
    setSaved(true)
  }
  function showPopup(){
    setPopup(!popup)
  }
  function back(){
    setPopup(!popup)
    setSaved(false)
  }

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const titleResponse = await axios.get(`http://localhost:8080/api/title/${dataKey}`);
        setTitle(titleResponse.data);
        const summaryResponse = await axios.get(`http://localhost:8080/api/summary/${dataKey}`);
        setSummary(summaryResponse.data);
        const linkResponse = await axios.get(`http://localhost:8080/api/link/${dataKey}`);
        setLink(linkResponse.data);
      } catch(error){
        console.log('Error fetching data: ',error);
      }
    };
    fetchData();
  },[]);

  return (
    <>
      {(!popup) && <div className= 'h-screen -mt-12 gap-6 p-4 flex flex-col items-center justify-center'>
        <div className='border-2 border-black border-solid h-auto w-3/4 bg-slate-400 rounded-xl shadow-lg shadow-sky-700'>
          <div className='border border-solid bg-slate-950 text-white rounded-xl p-4 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-wide'>
            {title}
          </div>
          <div className='sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide p-2'>
            {summary}
          </div>
          <div className='flex justify-between p-4'>
            <button onClick={()=>{showPopup(); saveArticle()}} className='text-xs font-semibold border-2 border-solid rounded-full bg-white text-slate-950 shadow-md shadow-black'>
              Save Article
            </button>
            <button onClick={showPopup} className='text-xs font-semibold border-2 border-solid rounded-full bg-white text-slate-950 shadow-md shadow-black'>
              Read Article
            </button>
          </div>
        </div>
        <Button onClick={func} label="Close" />
    </div>}
    
    {(popup) && <div className= 'h-screen -mt-12 gap-6 p-4 flex flex-col items-center justify-center'>
        <div className='border-2 border-black border-solid h-auto w-3/4 bg-slate-400 rounded-xl shadow-lg shadow-sky-700'>
          {(!saved) && <div className='sm:text-lg underline flex justify-center items-center md:text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide p-2'>
            <a href={link} target="_blank" >{link}</a>
          </div>}
          {(saved) && <div className='sm:text-lg flex justify-center items-center md:text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide p-2'>
            Article is saved
          </div>}
          <div className='flex justify-center items-center p-4'>
            <button onClick={back} className='text-xs font-semibold border-2 border-solid rounded-full bg-white text-slate-950 shadow-md shadow-black'>
              Back
            </button>
          </div>
        </div>
    </div>}
    
    </>
  )
}

