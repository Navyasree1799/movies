export interface IMovie {
  id: string;
  title: string;
  genre: string[];
  poster?: string;
  heroImg?: string;
}

export interface IGenre {
  genre: string;
  selected: boolean;
}

export interface IAxiosResponse<T> {
  data: any
}

export interface IMovieDetailsResponse {
  id: string;
  title: string;
  director: string;
  duration: number;
  releaseDate: string;
  releaseYear: number;
  moods: string[];
  // topCast: {
  //   name: string;
  //   characterName: string;
  // }[];
  actors: string[];
  genre: string[];
}