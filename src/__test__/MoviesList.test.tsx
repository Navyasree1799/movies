import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MoviesList from "../components/MoviesList";
import "@testing-library/jest-dom";

describe("MoviesList Component", () => {
  it("renders movies list component with default data", () => {
    const itemsPerPage = 10;
    const search = "Movie 1";
    const selectedGenres: string[] = [];
    const movies = [
      { id: "1", title: "Movie 1", genres: ["Action"], poster: "poster1.jpg" },
      { id: "2", title: "Movie 2", genres: ["Comedy"], poster: "poster2.jpg" },
    ];

    render(
      <BrowserRouter>
        <MoviesList
          movies={movies}
          itemsPerPage={itemsPerPage}
          search={search}
          selectedGenres={selectedGenres}
        />
      </BrowserRouter>
    );

    const movieCards = screen.getAllByTestId(/movie-card/i);
    expect(movieCards.length).toBeGreaterThan(0);

    const noResultsMessage = screen.queryByText(/no results were found/i);
    expect(noResultsMessage).not.toBeInTheDocument();
  });

  it("renders movie name when it exists in the list", () => {
    const itemsPerPage = 10;
    const search = "Movie 1";
    const selectedGenres: string[] = [];
    const movies = [
      { id: "1", title: "Movie 1", genres: ["Action"], poster: "poster1.jpg" },
      { id: "2", title: "Movie 2", genres: ["Comedy"], poster: "poster2.jpg" },
    ];

    render(
      <BrowserRouter>
        <MoviesList
          movies={movies}
          itemsPerPage={itemsPerPage}
          search={search}
          selectedGenres={selectedGenres}
        />
      </BrowserRouter>
    );

    const movieNameElement = screen.getByText(/Movie 1/i);
    expect(movieNameElement).toBeInTheDocument();
  });

  it("renders movies list component with selected genres and title search", () => {
    const itemsPerPage = 10;
    const search = "Action Movie";
    const selectedGenres = ["Action"];

    const movies = [
      {
        id: "1",
        title: "Action Movie 1",
        genres: ["Action"],
        poster: "action-poster1.jpg",
      },
      {
        id: "2",
        title: "Comedy Movie",
        genres: ["Comedy"],
        poster: "comedy-poster.jpg",
      },
    ];

    render(
      <BrowserRouter>
        <MoviesList
          movies={movies}
          itemsPerPage={itemsPerPage}
          search={search}
          selectedGenres={selectedGenres}
        />
      </BrowserRouter>
    );

    const actionMovieElement = screen.getByText(/Action Movie 1/i);
    expect(actionMovieElement).toBeInTheDocument();

    const comedyMovieElement = screen.queryByText(/Comedy Movie/i);
    expect(comedyMovieElement).not.toBeInTheDocument();
  });
});
