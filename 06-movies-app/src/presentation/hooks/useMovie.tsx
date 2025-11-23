import { useEffect, useState } from 'react';
import * as UseCases from '../../core/use-case';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import { FullMovie } from '../../core/entities/movie.entity';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();

  useEffect(() => {
    loadMovie();
  }, [movie]);

  const loadMovie = async () => {
    setIsLoading(true);

    const fullMovie = await UseCases.getMovieByIdUseCase(
      movieDBFetcher,
      movieId,
    );
    setMovie(fullMovie);
    setIsLoading(false);

    console.log('♥️♥️♥️♥️♥️♥️');
    console.log({ fullMovie });
    console.log('♥️♥️♥️♥️♥️♥️');
  };

  return {
    isLoading,
    movie,
  };
};
