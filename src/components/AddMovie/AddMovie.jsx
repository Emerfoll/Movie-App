import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


function AddMovie(params) {

    const [movieTitle, setMovieTitle] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        if (movieTitle !== '') {
            console.log(movieTitle, 'submitted');
        }
       else( alert('Please fill out "Airline Name"'))
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
                    onChange={(event) => setMovieTitle(event.target.value)}/>
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
                    <option>one</option>
                    <option>two</option>
                    <option>three</option>
                    <option>four</option>
                    <option>five</option>
                    <option>six</option>
                </select>
                <button onClick={handleSubmit}>Submit</button>
            </form>

        </>
    )
}

export default AddMovie;