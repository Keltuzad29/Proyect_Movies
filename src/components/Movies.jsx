import { MovieCard } from './MovieCard';
import styles from '../styles/Movies.module.css'
import { useEffect, useState } from 'react';
import { get } from '../utils/httpClient';
import { Spinner } from './Spinner';
import { useQuery } from "../hooks/useQuery";


export function Movies() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const movies = moviesState[0];
    // const setMovies = moviesState[1]; 
    //const [movies, setMovies] = moviesState;
    const query = useQuery();
    const search = query.get("search");
    
    useEffect(()=> {
        setIsLoading(true);
        const searchUrl = search 
        ? "/search/movie?query=" + search 
        : "/discover/movie";
        get(searchUrl)
        .then((data) => {
            setMovies(data.results)
            setIsLoading(false);
        });
}, [search]);

if(isLoading){
    return <Spinner/>
}
    return <ul className={styles.movie}>
        {movies.map((movie)=>(
        <MovieCard key={movie.id} movie={movie}/>
        ))}
    </ul>  
}