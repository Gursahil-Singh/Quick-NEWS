import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Article(props) {
  const{article, link, id ,onDelete} = props
  const[click, setClick] = useState(false)

  function handleClick() {
    setClick(true);
  }
  useEffect(()=>{

    const deleteArticle = async () => {
      if(click){
        try {
          await axios.delete(`http://localhost:8080/database/article/${id}`)
          onDelete(id)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };
    deleteArticle();
  },[click])
  
  return (
    <tr className='bg-slate-400'>
        <td className='border-2 px-2 py-2 text-center capitalize border-solid border-white'>{article}</td>
        <td className='border-2 px-2 py-2 text-center border-solid border-white underline'><a href={link} target='_BLANK'>Go to Webpage</a></td>
        <td className='border-2 px-2 py-2 text-center border-solid border-white'>
            <button onClick={handleClick} className='bg-red-500 rounded-xl px-2'>
                Delete
            </button>
        </td>
    </tr>
  )
}
