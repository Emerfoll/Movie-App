import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';



function MovieItem({ movie }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const movieClicked = (movie) => {
        let movieId = movie.id
        let title = movie.title
        console.log('Movie clicked', movieId, title);
        history.push(`/details/${movieId}`)

    }




    return (
        <div>

            <div key={movie.id} >
                <h3>{movie.title}</h3>
                <img
                    src={movie.poster}
                    alt={movie.title}
                    onClick={() => movieClicked(movie)} />
            </div>

        </div>
    )
}

export default MovieItem;