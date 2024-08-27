import React from 'react';
import GPTSearchbar from './GPTSearchbar';
import GPTMovieSuggestions from './GPTMovieSuggestions';
import { BG_URL } from '../utils/constants';

const GPTSearchPage = () => {
  return (
    <div className="text-white">
      <div className="absolute w-full h-full -z-10">
        <img
          className="w-full h-full object-cover opacity-95"
          alt="background"
          src={BG_URL}
        />
      </div>
      <GPTSearchbar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearchPage;
