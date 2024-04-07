import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { fetchMovieId } from "../api";
import MovieDescription from "../components/MovieDescription/MovieDescription";
import TopAnimes from "../components/TopAnimes/TopAnimes";
import { CharacterType } from "../movietypes";
const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState<CharacterType>();
    const { id }  = useParams();    useEffect( () => {
        const gotSingleMovie = async() => {
            const gotMovie = await fetchMovieId(id)
            setMovieDetails(gotMovie)
        }
        if(!movieDetails){
            gotSingleMovie();
        }
    },[movieDetails, id])
    console.log(id);  
    return (
    <>
    <MovieDescription  movieTitle ={movieDetails?.title}
    movieOriginalTitle ={movieDetails?.original_title}
    movieImage ={movieDetails?.image}
    movieBanner={movieDetails?.movie_banner}
    movieDescription ={movieDetails?.description}
    movieDirector ={movieDetails?.director}
    movieReleaseDate ={movieDetails?.release_date}
    movieRunningTime ={movieDetails?.running_time}
    movieRating ={movieDetails?.rt_score}
    moviePrice = "700 ALL"
    />
    <TopAnimes/>
    </>
  )
}
export default MovieDetails;