import { render, fireEvent } from '@testing-library/react';
import GenresFilter from '../components/Genres';
import '@testing-library/jest-dom';

describe('GenresFilter', () => {
  const movieGenres = ['Action', 'Comedy', 'Drama'];
  const selectedGenres = ['Action'];
  const setSelectedGenres = vi.fn();

  const renderGenresFilter = () =>
    render(
        <GenresFilter movieGenres={movieGenres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} />
    );

  it('renders the genres', () => {
    const { getByText } = renderGenresFilter();
    movieGenres.forEach((genre) => {
      expect(getByText(genre)).toBeInTheDocument();
    });
  });

  it('handles click events to toggle genre', () => {
    const { getByText } = renderGenresFilter();
    fireEvent.click(getByText('Comedy'));
    expect(setSelectedGenres).toHaveBeenCalledWith([...selectedGenres, 'Comedy']);
  });
});
