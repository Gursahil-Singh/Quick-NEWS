import React from 'react'

export default function NewsCard(props) {
    const{onClick}=props
  return (
    <button onClick={onClick} className='text-black p-4 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-wide border-2 border-solid border-sky-700 bg-slate-400 sm:max-w-64 md:max-w-80 lg:max-w-96 max-w-96 sm:max-h-52 xl:max-h-64 max-h-40 rounded-xl shadow-md'>
        Russia accuses British diplomats of spying as Putin escalates row with West over Ukraine weapons
    </button>
  )
}
