import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import movieStyles from "../modules/Movies.module.css";
import Pagination from "./Pagination";
import { IMovie } from "../modals/CommonModals";

const defaultImageUrl = "moviePosterImages/defaultImage.jpeg";

function handleTargetImage(
  event: React.SyntheticEvent<HTMLImageElement, Event>
) {
  event.currentTarget.src = defaultImageUrl;
}

interface MoviesListProps {
  movies: IMovie[];
  itemsPerPage: number;
  search: string;
  selectedGenres: string[];
}

const MoviesList = (props: MoviesListProps) => {
  const { itemsPerPage, search, selectedGenres, movies } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [hovered, setHovered] = useState(false);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  function resetCurrentPage() {
    currentPage !== 1 && setCurrentPage(1);
  }

  function filteredMovies() {
    const haveGenres = selectedGenres.length > 0;
    if (search.length > 0 || haveGenres) {
      return movies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(search.toLowerCase()) &&
          (selectedGenres.length > 0
            ? selectedGenres.some((genre) => movie.genre.includes(genre))
            : true)
      );
    } else {
      return movies;
    }
  }

  const filteredMoviesResult = filteredMovies();

  const totalPages = () =>
    Math.ceil(filteredMoviesResult.length / itemsPerPage);

  const pages = totalPages();

  useEffect(() => {
    resetCurrentPage();
  }, [search, selectedGenres]);

  return (
    <div>
      {filteredMoviesResult.length > 0 ? (
        <div className={movieStyles.moviesContainer}>
          {filteredMoviesResult
            .slice(indexOfFirstItem, indexOfLastItem)
            .map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                poster={movie.poster}
                title={movie.title}
                handleTargetImage={handleTargetImage}
                hovered={hovered}
                setHovered={setHovered}
              />
            ))}
        </div>
      ) : (
        <h1 className={movieStyles.noResultsFound}> No results were found </h1>
      )}

      {filteredMoviesResult.length > 0 && pages > 1 && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={pages}
        />
      )}
    </div>
  );
};

export default MoviesList;
