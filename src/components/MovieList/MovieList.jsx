import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';

function MovieList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const movieClicked = (movie) => {
        let movieId = movie.id
        let title = movie.title
        console.log('Movie clicked', movieId, title);
        history.push('/details')
        dispatch({type: 'GET_THE_DETS', payload: movieId })
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img 
                            src={movie.poster} 
                            alt={movie.title} 
                            onClick={() => movieClicked(movie)}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;