import React from 'react'
import NewsCard from './NewsCard'

export default function News(props) {
    const{func} = props
  return (
    <div className= 'mb-2 h-screen gap-6 place-items-center p-4 grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1'>
        <NewsCard onClick={func} />
        <NewsCard onClick={func} />
        <NewsCard onClick={func}/>
        <NewsCard onClick={func}/>
        <NewsCard onClick={func}/>
        <NewsCard onClick={func}/>
    </div>
  )
}
