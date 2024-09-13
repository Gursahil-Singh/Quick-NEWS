import React from 'react'
import Button from './Button'
import Loading from './Loading'
import { useState } from 'react'


export default function FetchNews(props) {
  const{onLoad} = props
  const[fetchState,setFetchState] = useState(true)
  const[loadingState,setLoadingState] = useState(false)

  function stateChange(){
    setLoadingState(!loadingState)
    setFetchState(!fetchState)
  } 

  return (
    <div>
        {fetchState  && <Button onClick={stateChange} label="Fetch Latest News" /> }
        {loadingState && <Loading onLoad={onLoad}/> }
    </div>
  )
}
