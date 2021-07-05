import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import styles from '../styles/MoviesDetails.module.css';
import { get } from "../utils/httpClient";

export function MovieDetails() {
    
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovies] = useState(null);
    console.log(movie);
        
    useEffect(()=>{
        setIsLoading(true);
        get("/movie/" + movieId).then((data) => {
            setMovies(data)
            setIsLoading(false);
        });
}, [movieId]);
if (isLoading){
    return(<Spinner/>)
}    

if(!movie){
    return null;
}

    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;  
    return(
    <div className={styles.detailsContainer}>
       <img className= {`${styles.col} ${styles.movieImg}`} src={imageUrl} alt={movie.title} />
       <div className={`${styles.col} ${styles.movieDetails}`}>
        <p>
        <strong>Titulo: </strong> {movie.title}
        </p>
        <p>
        <strong>Genero: </strong>
            {movie.genres.map((genere)=> genere.name).join(', ')}</p>
       <p><strong>Descripcion: </strong>{movie.overview}</p>
       </div>
    </div>
    )}