import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';


function AddMovie(params) {

    const dispatch = useDispatch();
    const history = useHistory();
    
    useEffect(() => {
        dispatch({ type: 'GET_GENRES' });
    }, []);

    const [movieTitle, setMovieTitle] = useState('')
    const [moviePoster, setMoviePoster] = useState('')
    const [movieDescription, setMovieDescription] = useState('')
    const [movieGenre, setMovieGenre] = useState('')
    const genres = useSelector(store => store.genres);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        if (movieTitle !== '' 
        && moviePoster !== '' 
        && movieDescription !== '') {
            const movieToAdd = {
                movieTitle,
                moviePoster,
                movieDescription,
                movieGenre
            }
            dispatch({ type: 'ADD_MOVIE', payload: movieToAdd})
            console.log('submitted', movieToAdd);
        }
        else (alert('Please fill out all fields'));
        setMovieTitle('');
        setMoviePoster('');
        setMovieDescription('');
    }

    const handleCancel = () => {
        console.log('Movie not added');
        history.push('/')
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
                        value={moviePoster}
                        onChange={(event) => setMoviePoster(event.target.value)}
                    />
                </div>
                <div>
                    <textarea
                        name="description"
                        id=""
                        cols="30" rows="10"
                        value={movieDescription}
                        onChange={(event) => setMovieDescription(event.target.value)}
                    ></textarea>
                </div>
                <select 
                name="genre" 
                id="genre"
                value={movieGenre}
                onChange={(event) => setMovieGenre(event.target.value)}
                >
                    {genres.map((genre) => {
                        return (<option value={genre.id} key={genre.id}>{genre.name}</option>)})}
                </select>
                <div>
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={handleCancel}>Cancel</button>
                </div>
            </form>

        </>
    )
}

export default AddMovie;