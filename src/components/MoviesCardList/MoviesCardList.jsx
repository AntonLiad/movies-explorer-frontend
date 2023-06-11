import "./MoviesCardList.css";
import { moviesData } from "../../utils/constans";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({ meMovies }) => {
  return (
    <>
      <div className="movies-card-list">
        {moviesData.map((i) => {
          return (
            <MoviesCard
              key={i.movieId}
              title={i.nameRU}
              time={i.duration}
              img={i.thumbnail}
              meMovies={meMovies}
              isLiked={i.isLiked}
            />
          );
        })}
      </div>
      <button className="movies-card-list__btn">Ещё</button>
    </>
  );
};

export default MoviesCardList;