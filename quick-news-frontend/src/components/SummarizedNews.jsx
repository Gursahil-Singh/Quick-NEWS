import React from 'react'
import Button from './Button'

export default function SummarizedNews(props) {
  const{func} = props
  return (
    <div className= 'h-screen -mt-12 gap-6 p-4 flex flex-col items-center justify-center'>
        <div className='border-2 border-black border-solid h-auto w-3/4 bg-slate-400 rounded-xl shadow-lg shadow-sky-700'>
          <div className='border border-solid bg-slate-950 text-white rounded-xl p-4 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-wide'>
            Russia accuses British diplomats of spying as Putin escalates row with West over Ukraine weapons
          </div>
          <div className='sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide p-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maiores ducimus expedita asperiores illum ullam facilis excepturi animi esse cupiditate sunt ex, fugiat quis sed dolor quasi fuga modi mollitia.
          </div>
        </div>
        <Button onClick={func} label="Close" />
    </div>
  )
}

