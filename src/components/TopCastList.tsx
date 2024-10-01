import { IMovieDetailsResponse } from "../modals/CommonModals";
import specificMovieStyles from "../modules/SpecificMovie.module.css";

interface ITopCastList {
  selectedMovie: IMovieDetailsResponse;
}

const TopCastList = (props: ITopCastList) => {
  const { selectedMovie } = props;
  return (
    <>
      <h2>TOP CAST</h2>
      <div className={specificMovieStyles.cast}>
        {selectedMovie?.actors.map((cast) => (
          <div key={cast}>
            <h3 key={cast} style={{ marginBottom: 5 }}>
              {cast || "unknown"}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopCastList;
