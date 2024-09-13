import React from 'react'
import FetchNews from './FetchNews'
import Header from './Header'
import News from './News'
import SummarizedNews from './SummarizedNews'
import { useState } from 'react'

export default function Hero() {
  const [fetchNewsState, setFetchNewsState] = useState(true)
  const [newsState, setNewsState] = useState(false)
  const [summaryState, setSummaryState] = useState(false)

  function showSummary(){
    setNewsState(!newsState)
    setSummaryState(!summaryState)
  }

  function showNews(){
    setFetchNewsState(false)
    setNewsState(true)
  }

  return (
    <div className='overflow-auto max-h-screen bg-zinc-200'>
        <Header />
        {fetchNewsState && <div className='h-screen -mt-12 flex justify-center items-center'>
            <FetchNews onLoad={showNews} />
        </div>}
        {newsState && <News func={showSummary} />}
        {summaryState &&<SummarizedNews func={showSummary} />}
    </div>
  )
}
