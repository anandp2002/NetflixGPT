import { useDispatch } from 'react-redux';
import { TMDB_API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  //fetch trailer video & updating the store with trailer
  useEffect(() => {
    const getMovieVideo = async () => {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/' +
          movieId +
          '/videos?language=en-US',
        TMDB_API_OPTIONS
      );
      const json = await data.json();
      const filterData = json.results.filter(
        (video) => video.type === 'Trailer'
      );
      const trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
    };
    getMovieVideo();
  }, [dispatch, movieId]);
};

export default useMovieTrailer;
