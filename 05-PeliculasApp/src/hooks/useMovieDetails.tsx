import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MovieFull} from '../interfaces/movieInterface';
import {CreditsResponse, Cast} from '../interfaces/creditInterface';

interface MoviesDetails {
  cast: Cast[];
  isLoading: boolean;
  movieFull?: MovieFull;
}

export const useMoviesDetails = (movieId: number) => {
  const [movieDetails, setMovieDetails] = useState<MoviesDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);

    const [movieDetailsResponse, castResponse] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);
    setMovieDetails({
      cast: castResponse.data.cast,
      isLoading: false,
      movieFull: movieDetailsResponse.data,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {...movieDetails};
};
