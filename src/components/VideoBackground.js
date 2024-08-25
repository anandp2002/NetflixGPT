import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="w-screen">
      <iframe
        className="w-full aspect-video"
        src={
          'https://www.youtube.com/embed/' +
          trailerVideo?.key +
          '?playlist=' +
          trailerVideo?.key +
          '&loop=1&autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0'
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
