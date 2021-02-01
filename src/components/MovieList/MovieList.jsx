import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';



function MovieList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


    return (
        <main>
            <h1>MovieList</h1>
            <Grid container spacing={4} justify="center" className="movies">
                {movies.map((movie) => (
                    <Grid item key={movie.id} className="movieCardsArea">
                        <MovieItem
                            movie={movie}
                            key={movie.id}
                        />
                    </Grid>
                ))}
            </Grid>
        </main>

    );
}

export default MovieList;