import React from 'react'
import FetchNews from './FetchNews'
import Header from './Header'
import News from './News'
import SummarizedNews from './SummarizedNews'
import { useState } from 'react'
import SavedArticles from './SavedArticles'

export default function Hero() {
  const [fetchNewsState, setFetchNewsState] = useState(true)
  const [newsState, setNewsState] = useState(false)
  const [summaryState, setSummaryState] = useState(false)
  const [savedArticlesState,setSavedArticlesState] = useState(false)
  const [prevPage,setPrevPage] = useState("")
  const [dataKey,setDataKey] = useState(0)

  function setSummaryKey(dataKey){
    setDataKey(dataKey)
    showSummary()
  }

  function showSummary(){
    setNewsState(!newsState)
    setSummaryState(!summaryState)
  }

  function showNews(){
    setFetchNewsState(false)
    setNewsState(true)
  }

  function changeSavedArticlesState(){
    if(!savedArticlesState){
      if(fetchNewsState){
        setPrevPage("fetchNews")
        setFetchNewsState(false)
      }
      else if(newsState){
        setPrevPage("news")
        setNewsState(false)
      }
      else if(summaryState){
        setPrevPage("summary")
        setSummaryState(false)
      }
    }
    else if(savedArticlesState){
      if(prevPage==="fetchNews"){setFetchNewsState(true)}
      else if(prevPage==="news"){setNewsState(true)}
      else if(prevPage==="summary"){setSummaryState(true)}
    }
    setSavedArticlesState(!savedArticlesState)
  }

  return (
    <div className='overflow-auto max-h-screen bg-zinc-200'>
        <Header button={changeSavedArticlesState} buttonState={savedArticlesState} />
        {fetchNewsState && <div className='h-screen -mt-12 flex justify-center items-center'>
            <FetchNews onLoad={showNews} />
        </div>}
        {newsState && <News func={setSummaryKey} />}
        {summaryState &&<SummarizedNews func={showSummary} dataKey={dataKey} />}  
        {savedArticlesState && <SavedArticles />}
    </div>
  )
}
