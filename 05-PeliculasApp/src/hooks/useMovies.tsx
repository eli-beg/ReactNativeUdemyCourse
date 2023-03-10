import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBResponse} from '../interfaces/movieInterface';

interface MoviesState {
  nowPlayingMovies: Movie[];
  popularMovies: Movie[];
  topRated: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlayingMovies: [],
    popularMovies: [],
    topRated: [],
  });

  const getMovies = async () => {
    const nowPlayingPromise = movieDB.get<MovieDBResponse>('/now_playing');
    const popularPromise = movieDB.get<MovieDBResponse>('/popular');
    const topRatedPrommise = movieDB.get<MovieDBResponse>('/top_rated');

    const response = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPrommise,
    ]);

    setMoviesState({
      nowPlayingMovies: response[0].data.results,
      popularMovies: response[1].data.results,
      topRated: response[2].data.results,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return {
    ...moviesState,
    isLoading,
  };
};
