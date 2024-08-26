import { useDispatch } from 'react-redux';
import { TMDB_API_OPTIONS } from '../utils/constants';
import { addTopRatedMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useTopRatedMovies = () => {
  //Fetch data from TMDB and updating the store
  const dispatch = useDispatch();

  useEffect(() => {
    const getTopRatedMovies = async () => {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?page=1',
        TMDB_API_OPTIONS
      );
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    };
    getTopRatedMovies();
  }, [dispatch]);
};

export default useTopRatedMovies;
