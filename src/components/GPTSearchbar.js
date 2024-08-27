import React from 'react';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GPTSearchbar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="grid grid-cols-12 w-3/4">
        <input
          className="p-4 col-span-10 rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button className=" bg-red-600 col-span-2 ml-6 rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchbar;
