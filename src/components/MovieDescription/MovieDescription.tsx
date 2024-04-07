import Button from "../../common/Button/Button";
import LikeButton from "../../common/LikeButton/LikeButton";
import ReserveModal from "../ReserveModal/ReserveModal";
import styles from './MovieDescription.module.css'
interface Props {
    movieId?: string;
    movieTitle?: string;
    movieOriginalTitle?: string;
    movieImage?: string;
    movieBanner?: string;
    movieDescription?: string;
    movieDirector?: string;
    movieReleaseDate?: string;
    movieRunningTime?: string;
    movieRating?: string;
    moviePrice?: string;
    isLiked?: boolean;
    isReserved?: boolean;
}
export type TicketReservation ={
  movieId?: string;
  movieTitle?: string;
  numTickets: number;
  seatSelection: string;
}
const MovieDesciption:React.FC<Props> = (
    {
        movieTitle,
        movieOriginalTitle,
        movieImage,
        movieBanner,
        movieDescription,
        movieDirector,
        movieReleaseDate,
        movieRunningTime,
        movieRating,
        moviePrice
    }
) => {  return (
    <div className={styles.container}>
      <div>
        <img src={movieImage} alt="" className = {styles.images} />
      </div>
      <div className={styles.movieInfoContainer}>
        <h1 className={styles.movieTitle}>{movieTitle}</h1>
        <p>
          <span>Running Time : {movieRunningTime} minutes</span> • <span>Rating : {movieRating}</span>
        </p>
        <div className={styles.buttons}>
          <Button label="Buy Tickets"/>
          <ReserveModal />
          <LikeButton /> 
        </div>
        <div>{movieDescription}</div>
      </div>
      <div className={styles.movieInfoContainer}>
        <img src={movieBanner} alt=""  className={styles.images}/>
        <p>
          <b>Japanese: </b> {movieOriginalTitle}{" "}
        </p>
        <p>
          <b>Release Date: </b> {movieReleaseDate}{" "}
        </p>
        <p>
          <b>Movie Director: </b>
          {movieDirector}{" "}
        </p>
        <p>
          <b>Movie Price: </b> {moviePrice}
        </p>
      </div>
    </div>
  );
}
export default MovieDesciption