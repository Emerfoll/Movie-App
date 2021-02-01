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
import './MovieItem.css';

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
        <div key={movie.id} className="movieCards" >
            
            <Card elevation={4} style={{backgroundColor: "#7d608b"}}>
                <CardActionArea>
                    <Box  width={300} hight={600}>
                        <h3>{movie.title}</h3>
                        <img width={225} src={movie.poster} alt={movie.title} onClick={() => movieClicked(movie)} />
                    </Box>
                </CardActionArea>
            </Card>


        </div>
    )
}

export default MovieItem;
