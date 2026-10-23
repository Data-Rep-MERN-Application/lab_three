import { useEffect } from 'react';
import MovieItem from './MovieItem';

function Movies(props) {
  useEffect(() => {
    console.log("Movies:", props.myMovies);
  }, [props.myMovies]);

  // Render one MovieItem per movie, passing each movie down as the mymovie prop
  return props.myMovies.map((movie) => (
    <MovieItem mymovie={movie} key={movie.imdbID}></MovieItem>
  ));
}

export default Movies
