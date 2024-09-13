import { useEffect } from 'react';
import loadingGif from './assets/loading.png';
import axios from 'axios'

function Loading(props) {
  const{onLoad}=props

  useEffect(() => {
    const timeout = setTimeout(onLoad, 5000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="border-2 border-solid rounded-full bg-sky-700 text-white p-4 sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide h-12 flex justify-center gap-4 items-center">
        <p>Loading</p>
      <img src={loadingGif} alt="Loading" className="w-10 h-10 animate-spin" />
    </div>
  );
}

export default Loading;