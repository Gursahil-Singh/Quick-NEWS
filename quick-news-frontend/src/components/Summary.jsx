import React from 'react'

export default function Summary(props) {
    const{title, summary, showPopup, saveArticle} = props
  return (
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
  )
}
