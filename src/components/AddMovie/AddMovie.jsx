import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


function AddMovie(params) {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch({ type: 'GET_GENRES' });
    }, []);

    const [movieTitle, setMovieTitle] = useState('')
    const genres = useSelector(store => store.genres);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        if (movieTitle !== '') {
            console.log(movieTitle, 'submitted');
        }
        else (alert('Please fill out "Airline Name"'))
        setMovieTitle('')
    }

    return (
        <>
            <h1>Add Movie</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Movie Title"
                        value={movieTitle}
                        onChange={(event) => setMovieTitle(event.target.value)} />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Movie Poster URL"

                    />
                </div>
                <div>
                    <textarea
                        name="description"
                        id=""
                        cols="30" rows="10"

                    ></textarea>
                </div>
                <select name="genre" id="genre">
                    {genres.map((genre) => {
                        return (<option>{genre.name}</option>)})}
                </select>
                <button onClick={handleSubmit}>Submit</button>
            </form>

        </>
    )
}

export default AddMovie;