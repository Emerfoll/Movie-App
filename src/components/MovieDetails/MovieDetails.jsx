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
    const details = useSelector(store=>store.movieDetailsReducer)
    const genres = useSelector(store => store.genres);
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const movie = movies[id - 1]

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'GET_THE_DETS', payload: id })
        dispatch({ type: 'GET_GENRES', payload: id });
    }, []);


    console.log(genres);

    return (
        <>

            <h1>Movie Details for {movie?.title}</h1>
            {details.map((detail)=>{
                return(
                    <div key={detail.title}>
                        <h1>{detail.title}</h1>
                        <img width={300} src={detail.poster} alt={detail.title}></img>
                        <p>{detail.description}</p>
                    </div>
                )

            })}
            <h3>Great for fans of the genres:</h3>
            {genres.map((genre)=>{
                return(
                    <p key={genre.name}>{genre.name}</p>
                )
            })}
        </>
    )
}

export default MovieDetails;

