import { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import movieStyles from "../modules/Movies.module.css";

interface IMovieCard {
  handleTargetImage: (event: SyntheticEvent<HTMLImageElement, Event>) => void;
  id: string;
  poster?: string;
  title: string;
  hovered: boolean;
  setHovered: React.Dispatch<React.SetStateAction<boolean>>;
}

const MovieCard = (props: IMovieCard) => {
  const { id, poster, title, handleTargetImage, hovered, setHovered } = props;
  const navigate = useNavigate();
  return (
    <div
      data-testid={`movie-card-${id}`} // Assigning a testID to MovieCard
      className={movieStyles.movieCard}
      onClick={() => navigate(`/${id}`)}
    >
      <img
        src={poster}
        alt={"movie poster"}
        onError={handleTargetImage}
        className={
          hovered ? movieStyles.moviePosterFiltered : movieStyles.moviePoster
        }
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseOut={() => setHovered(false)}
      />
      <h3 className={movieStyles.movieTitle}>{title}</h3>
    </div>
  );
};

export default MovieCard;
