import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  return (
    <div className="pt-6 pl-6 pr-6">
      <h1 className="text-2xl font-bold text-white pb-3">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex min-w-max">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
