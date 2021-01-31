import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
    HashRouter as Router,
    Route,
    useParams
} from "react-router-dom";

function MovieDetails(params) {

    const movies = useSelector(store => store.movies);
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const movie = movies[id - 1]

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'GET_THE_DETS', payload: id });
    }, []);


    console.log(movies);
    console.log(id);
    console.log(movie);

    return (
        <>

            <h1>MovieDetails for movie {movie?.title}</h1>
            <img
                src={movie?.poster}
                alt={movie?.title} />
            <p>{movie?.description}</p>

        </>
    )
}

export default MovieDetails;