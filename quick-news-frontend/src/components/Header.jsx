import React from 'react'

export default function Header() {
  return (
    <div className='cursor-default bg-slate-950 text-white min-h-12 flex justify-center items-center'>
        <h1 className='sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold tracking-wide'>
            Quick<span className='text-sky-700'>NEWS</span>
        </h1>
    </div>
  )
}
