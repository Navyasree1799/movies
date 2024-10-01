import movieStyles from "../modules/Movies.module.css";
import Chip from "./Chip";
interface IGenreFilterProps {
  movieGenres: string[];
  selectedGenres: string[];
  setSelectedGenres: React.Dispatch<React.SetStateAction<string[]>>;
}

const GenresFilter = (props: IGenreFilterProps) => {
  const { selectedGenres, setSelectedGenres, movieGenres } = props;
  function toggleGenre(clickedGenre: string) {
    let temp = [...selectedGenres];
    temp.includes(clickedGenre)
      ? temp.splice(temp.indexOf(clickedGenre), 1)
      : temp.push(clickedGenre);
    setSelectedGenres(temp);
  }

  return (
    <div className={movieStyles.genreContainer}>
      {movieGenres.map((genre) => (
        <Chip
          key={genre}
          title={genre}
          selected={selectedGenres.includes(genre)}
          handleClick={() => toggleGenre(genre)}
        />
      ))}
    </div>
  );
};

export default GenresFilter;
