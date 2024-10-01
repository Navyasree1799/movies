import React, { useEffect, useState } from "react";
import movieStyles from "../modules/Movies.module.css";
import GenresFilter from "../components/Genres";
import MoviesList from "../components/MoviesList";
import { IMovie } from "../modals/CommonModals";
import { getMovies } from "../services/moviesService";
import Spinner from "../components/Spinner";

const Movies = () => {
  const [search, setSearch] = useState("");
  const itemsPerPage = 10;
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [movieGenres, setMovieGenres] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchMoviesData() {
    setLoading(true)
    getMovies()
      .then((moviesData) => {
        setMovies(moviesData.movies);
        setMovieGenres(moviesData.movieGenres);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert(JSON.parse(err));
      });
  }

  useEffect(() => {
    fetchMoviesData();
  }, []);

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  if (loading) return <Spinner />;

  return (
    <div>
      <h1>Movies</h1>
      <div className={movieStyles.searchBox}>
        <span className={movieStyles.searchIcon}>🔍</span>
        <input
          id="search"
          type="search"
          placeholder="Search by movie name..."
          className={movieStyles.inputBox}
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      <GenresFilter
        movieGenres={movieGenres}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
      />

      <MoviesList
        movies={movies}
        itemsPerPage={itemsPerPage}
        search={search}
        selectedGenres={selectedGenres}
      />
    </div>
  );
};

export default Movies;
