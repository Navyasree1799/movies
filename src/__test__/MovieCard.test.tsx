import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import "@testing-library/jest-dom";

describe("MovieCard", () => {
  const handleTargetImage = vi.fn();
  const setHovered = vi.fn();
  const props = {
    id: "1",
    poster: "test.jpg",
    title: "Test Movie",
    handleTargetImage,
    hovered: false,
    setHovered,
  };

  const renderMovieCard = () =>
    render(
      <Router>
        <MovieCard {...props} />
      </Router>
    );

  it("renders the movie title", () => {
    const { getByText } = renderMovieCard();
    expect(getByText("Test Movie")).toBeInTheDocument();
  });

  it("handles image error events", () => {
    const { getByAltText } = renderMovieCard();
    fireEvent.error(getByAltText("movie poster"));
    expect(handleTargetImage).toHaveBeenCalled();
  });

  it("handles mouse enter and leave events", () => {
    const { getByAltText } = renderMovieCard();
    fireEvent.mouseEnter(getByAltText("movie poster"));
    expect(setHovered).toHaveBeenCalledWith(true);
    fireEvent.mouseLeave(getByAltText("movie poster"));
    expect(setHovered).toHaveBeenCalledWith(false);
  });
});
