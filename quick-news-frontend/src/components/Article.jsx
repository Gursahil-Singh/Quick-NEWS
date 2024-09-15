import React from 'react'

export default function Article(props) {
  const{article, link} = props
  return (
    <tr className='bg-slate-400'>
        <td className='border-2 px-2 py-2 text-center capitalize border-solid border-white'>{article}</td>
        <td className='border-2 px-2 py-2 text-center border-solid border-white'>{link}</td>
        <td className='border-2 px-2 py-2 text-center border-solid border-white'>
            <button className='bg-red-500 rounded-xl px-2'>
                Delete
            </button>
        </td>
    </tr>
  )
}
