import styles from './styles/App.module.css'
import {BrowserRouter as Router ,Switch, Route, Link} from "react-router-dom"; 
import { MovieDetails } from "./pages/MoviesDetails";
import { LandingPage } from "./pages/LandingPages";

export function App() { 
    return(
    <Router>
      <header>
            <Link to="/"><h1 className={styles.title}>Movies</h1></Link> 
           </header>
        <main>
        <Switch>
            <Route exact path="/movie/:movieId">
                <MovieDetails />
            </Route>
            <Route path="/">
                <LandingPage/>
            </Route>
        </Switch>
        </main>   
    </Router>
    ) 
    
}