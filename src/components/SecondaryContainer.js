import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="mt-80 sm:-mt-44 relative z-10 bg-black">
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
