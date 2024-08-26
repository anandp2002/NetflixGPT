import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  return (
    <div className="transform transition-transform duration-300 ease-out hover:scale-105">
      <img
        className="h-60 sm:h-72 w-40 sm:w-48 pr-4 rounded-lg"
        alt="movie card"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
