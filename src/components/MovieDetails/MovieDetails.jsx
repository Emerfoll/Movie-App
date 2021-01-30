import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
    HashRouter as Router,
    Route,
    useParams
  } from "react-router-dom";


function MovieDetails(params) {

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);
    
    const movies = useSelector(store => store.movies);
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const movie = movies[id-1]



    console.log(movie);

    return(
        <>
        <h1>MovieDetails for move {movie.title}</h1>
        <p>{movie.description}</p>

        </>
    )
}

export default MovieDetails;