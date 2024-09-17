import React from 'react'

export default function Link(props) {
    const{saved, url, back} = props
  return (
    <div className= 'h-screen -mt-12 gap-6 p-4 flex flex-col items-center justify-center'>
        <div className='border-2 border-black border-solid h-auto w-fit md:w-3/4 bg-slate-400 rounded-xl shadow-lg shadow-sky-700'>
          {(!saved) && <div className='text-xs underline flex justify-center items-center md:text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide p-2'>
            <a href={url} target="_blank" >{url}</a>
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
    </div>
  )
}
