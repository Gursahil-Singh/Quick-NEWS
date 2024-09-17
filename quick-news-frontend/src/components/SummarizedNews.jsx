import React, { useEffect, useState } from 'react'
import Button from './Button'
import axios from 'axios'
import Loading from './Loading'
import Link from './Link'
import Summary from './Summary'

export default function SummarizedNews(props) {
  const{func,dataKey} = props
  const[title,setTitle] = useState("")
  const[summary,setSummary] = useState("")
  const[url,setUrl] = useState("")
  const[popup,setPopup] = useState(false)
  const[saved,setSaved] = useState(false)
  const[saveLink,setSaveLink] = useState(false)
  const[loadingState,setLoadingState] = useState(true)

  function hideLoading(){
    setLoadingState(false)
  }

  function saveArticle(){
    setSaved(true)
    if(!saveLink){setSaveLink(true)}
  }
  function showPopup(){
    setPopup(!popup)
  }
  function back(){
    setPopup(!popup)
    setSaved(false)
  }

  useEffect(() => {
    const sendData = async () =>{
      if(saveLink){ 
        try {
          const aiResponse = await axios.get(`http://localhost:8080/ai/title/${title}/summary/${summary}`);
          const articleObj = {
            article:aiResponse.data,
            link:url
          }
          await axios.post('http://localhost:8080/database/article', articleObj)
        } 
        catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };
    sendData();
  },[saveLink])

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const titleResponse = await axios.get(`http://localhost:8080/api/title/${dataKey}`);
        setTitle(titleResponse.data);
        const summaryResponse = await axios.get(`http://localhost:8080/api/summary/${dataKey}`);
        setSummary(summaryResponse.data);
        const linkResponse = await axios.get(`http://localhost:8080/api/link/${dataKey}`);
        setUrl(linkResponse.data);
      } catch(error){
        console.log('Error fetching data: ',error);
      }
      hideLoading();
    };
    fetchData();
  },[]);

  return (
    <>
      {loadingState && <Loading /> }

      {(!loadingState) && (!popup) && <div className= 'h-screen -mt-12 gap-6 p-4 flex flex-col items-center justify-center'>
        <Summary title={title} summary={summary} saveArticle={saveArticle} showPopup={showPopup} />
        <Button onClick={func} label="Close" />
      </div>}
      {(!loadingState) && (popup) && <Link saved={saved} url={url} back={back} />}
    
    </>
  )
}

