import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function MovieDetails(params) {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_MOVIES' });
    // }, []);

    console.log(movies);

    return (
        <div>

            <h1>IN MovieDetails</h1>


        </div>
    )
}

export default MovieDetails;