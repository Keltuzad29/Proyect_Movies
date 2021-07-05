import {Link} from 'react-router-dom';
import styles from '../styles/MovieCard.module.css'

export function MovieCard ({movie}){
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path
    return (
    <li className={styles.movieCard}>
    <Link to={/movie/ + movie.id}>
    <img 
    className={styles.movieImage} 
    src={imageUrl} 
    alt={movie.title} 
    />
    <hr/>
    <div className={styles.text}>{movie.title}</div></Link>
    </li>
    )

}