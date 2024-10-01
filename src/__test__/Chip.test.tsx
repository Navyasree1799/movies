import { render, fireEvent } from '@testing-library/react';
import Chip from '../components/Chip';
import '@testing-library/jest-dom';

describe('Chip', () => {
  it('renders the title', () => {
    const { getByText } = render(<Chip title="Test" />);
    expect(getByText('Test')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    const { getByText } = render(<Chip title="Test" handleClick={handleClick} />);
    fireEvent.click(getByText('Test'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('applies the default style when not selected', () => {
    const { getByText } = render(<Chip title="Test" />);
    expect(getByText('Test')).toHaveClass('chip');
  });

  it('applies the selected style when selected', () => {
    const { getByText } = render(<Chip title="Test" selected />);
    expect(getByText('Test')).toHaveClass('chipSelected');
  });
});
