import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import specificMovieStyles from "../modules/SpecificMovie.module.css";
import { IMovieDetailsResponse } from "../modals/CommonModals";
import Tag from "../components/Tag";
import { getSpecificMovies } from "../services/moviesService";
import secondsToHrMin from "../utils/secondsToHrMin";
import formatDate from "../utils/formatDate";
import TopCastList from "../components/TopCastList";
import Spinner from "../components/Spinner";

const SpecificMovie = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<IMovieDetailsResponse>();
  const defaultImageUrl = "movieHeroImages/defaultImage.jpeg";

  useEffect(() => {
    setLoading(true);
    getSpecificMovies(id as string)
      .then((res) => {
        setSelectedMovie(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert(JSON.parse(err));
      });
  }, []);

  function handleTargetImage(
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) {
    event.currentTarget.src = defaultImageUrl;
  }

  if (loading) return <Spinner />;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img
        src={`movieHeroImages/${id}.jpeg`}
        alt={"movie poster"}
        onError={handleTargetImage}
        className={specificMovieStyles.movieHeroImg}
      />
      <div className={specificMovieStyles.movieContent}>
        <h1>{selectedMovie?.title}</h1>
        {selectedMovie?.releaseDate && (
          <h5>
            {" "}
            {new Date(selectedMovie?.releaseDate as string) > new Date()
              ? "Releases"
              : "Released"}{" "}
            on {formatDate(selectedMovie?.releaseDate as string)}
          </h5>
        )}
        <div>
          <div className={specificMovieStyles.movieGenre}>
            <Tag title={secondsToHrMin(selectedMovie?.duration as number)} />
            {selectedMovie?.genre.map((genre) => (
              <Tag key={genre} title={genre} />
            ))}
          </div>

          <h2>DIRECTOR</h2>
          <h4 className={specificMovieStyles.movieDescription}>
            {selectedMovie?.director}
          </h4>

          <TopCastList selectedMovie={selectedMovie as IMovieDetailsResponse} />
        </div>
      </div>
    </div>
  );
};

export default SpecificMovie;
