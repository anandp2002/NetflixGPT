import { useDispatch } from 'react-redux';
import { TMDB_API_OPTIONS } from '../utils/constants';
import { addUpcomingMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useUpcomingMovies = () => {
  //Fetch data from TMDB and updating the store
  const dispatch = useDispatch();

  useEffect(() => {
    const getUpcomingMovies = async () => {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/upcoming?page=1',
        TMDB_API_OPTIONS
      );
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));
    };
    getUpcomingMovies();
  }, [dispatch]);
};

export default useUpcomingMovies;
