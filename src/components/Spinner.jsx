import styles from '../styles/Spinner.module.css'

export function Spinner(){
    return(
        <div className={`${styles.detailsContainer} ${styles.movieDetails}`}><img src="https://acegif.com/wp-content/uploads/loading-92.gif" alt="Loading..." />
        </div>
    )
} 
    
