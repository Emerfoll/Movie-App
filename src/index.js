import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';




// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('GET_GENRES', getGenres);
    yield takeEvery('ADD_MOVIE', addMovie);
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });
    } catch {
        console.log('get all error');
    }
}

function* getGenres(action) {
    try{
        console.log('in getGenres saga for id:', action.payload);
        const response = yield axios.get(`/api/movie/genre/${action.payload}`)
        console.log('response from server for genre:', response.data);
        //this data will need to go do a reducer,
        //that reducer will be grabbed by the details page with useEffect
        //server get will query both tables
        yield put({type: 'SET_GENRES', payload: response.data})
    }catch(error) {
        console.log(error);
        alert('problem getting genres')
    }
}


function* addMovie(action) {
    // get all genres from the DB
    try {        
        const movieToAdd = {
        title: action.payload.movieTitle,
        poster: action.payload.moviePoster,
        description: action.payload.movieDescription,
        genre_id: action.payload.movieGenre
    }
        console.log(movieToAdd);
        
        
        const response = yield axios.post('/api/movie', movieToAdd);
        console.log('adding Movie:', movieToAdd);
        console.log('response from adding', response);
        
        yield put({ type: 'FETCH_MOVIES'});
    } catch {
        console.log('get all genres error');
    }
}


// ------- End of Sagas


// ------- Reducers

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}



// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}


// ------- End of Reducers



// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
