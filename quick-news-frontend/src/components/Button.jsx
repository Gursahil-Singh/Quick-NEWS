import React from 'react'

export default function Button(props) {
    const {label , onClick} = props
  return (
    <button onClick={onClick} className='border-2 border-solid rounded-full bg-sky-700 text-white w-auto p-4 sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide'>
        {label}
    </button>
  )
}
