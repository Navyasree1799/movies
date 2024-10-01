import { apiEndPoints } from '../constants/apiConstants';
import { IAxiosResponse, IMovie, IMovieDetailsResponse } from '../modals/CommonModals';
import instance from './axiosInstance';


function getUniqueMovieGenres(moviesData: IMovie[]) {
  const genres: string[] = [];
  moviesData.forEach((movie) => {
    movie?.genre?.forEach((genre) => {
      !genres.includes(genre) &&
        genres.push(genre);
    });
  });
  return genres
}

export interface IMoviesResponse {
  movies: IMovie[],
  movieGenres: string[]
}

export const getMovies = async (): Promise<IMoviesResponse> => {
  try {
    const response: IAxiosResponse = await instance.get(apiEndPoints.getMovies);
    const movies = response.data
    
    const movieGenres = getUniqueMovieGenres(response.data)
    return {
      movies,
      movieGenres
    };
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const getSpecificMovies = async (id: string): Promise<IMovieDetailsResponse> => {
  try {
    const response: IAxiosResponse = await instance.get(`${apiEndPoints.getMovies}/${id}`);
    return response.data
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};