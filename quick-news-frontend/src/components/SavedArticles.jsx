import React, { useEffect, useState } from 'react'
import Article from './Article'
import axios from 'axios'

export default function SavedArticles() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/database/articles');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleArticleDelete = (articleId) => {
    setData((prevArticles) =>
      prevArticles.filter((article) => article.id !== articleId)
    );
  };


  return (
    <div className='h-screen flex mx-12 justify-center items-center -mt-12 pt-12 text-xs md:text-base lg:text-xl xl:text-xl'>
      <table className='max-w-full'>
        <thead className=' bg-slate-950 text-white cursor-default font-extrabold tracking-wide'>
          <tr >
            <th className='border-2 border-solid border-white px-4 py-2'>Article</th>
            <th className='border-2 border-solid border-white px-4 py-2'>Link</th>
            <th className='border-2 border-solid border-white px-4 py-2'>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <Article onDelete={handleArticleDelete} key={index} article={item.article} link={item.link} id={item.id} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
