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
    const genres = useSelector(store => store.genres)
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const movie = movies[id - 1]

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'GET_GENRES', payload: id });
    }, []);


    console.log(genres);

    return (
        <>

            <h1>Movie Details for {movie?.title}</h1>
            <img
                src={movie?.poster}
                alt={movie?.title} />
            <p>{movie?.description}</p>
            <div>

                <h3>Genre:</h3>
            {genres.map((genre) => {
               return <p>{genre.name}</p> 
            })}
            </div>
        </>
    )
}

export default MovieDetails;

// {movies.map((movie) => (
//     <Grid item key={movie.id}>
//         <MovieItem
//             movie={movie}
//             key={movie.id}
//         />
//     </Grid>
// ))}