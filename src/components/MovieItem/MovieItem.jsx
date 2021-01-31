import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    IconButton,
    Menu,
    MenuItem,
    Typography,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from '@material-ui/core';


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
        <div key={movie.id} >

            <Card elevation={4}>
                <CardActionArea>
                    <Box padding={2} width={300} hight={600}>
                        <h3>{movie.title}</h3>
                        <img width={225} src={movie.poster} alt={movie.title} onClick={() => movieClicked(movie)} />
                    </Box>
                </CardActionArea>
            </Card>


        </div>
    )
}

export default MovieItem;


{/* <div key={movie.id} >
                        <h3>{movie.title}</h3>
                        <img
                            src={movie.poster}
                            alt={movie.title}
                            onClick={() => movieClicked(movie)} />
                    </div> */}