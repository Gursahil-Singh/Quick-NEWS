import React from 'react'
import Button from './Button'

export default function Header(props) {
  const{button, buttonState} = props
  return (
    <div className='cursor-default bg-slate-950 text-white min-h-12 flex justify-between md:justify-center items-center px-4'>
        <h1 className='sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold tracking-wide'>
            Quick<span className='text-sky-700'>NEWS</span>
        </h1>
        <div className='md:absolute md:right-4 text-xs font-semibold border-2 border-solid rounded-full p-1  bg-white text-slate-950'>
          { (!buttonState) && <button onClick={button}> Saved Articles </button>}
          { buttonState && <button onClick={button}> Back </button>}
        </div>
    </div>
  )
}
