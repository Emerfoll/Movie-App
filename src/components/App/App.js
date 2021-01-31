import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails'
import AddMovie from '../AddMovie/AddMovie.jsx'


function App() {

  const dispatch = useDispatch();
  


  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/addMovie'>Add Movie</Link>
        </nav>
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/details/:id">
          <MovieDetails />
        </Route>

        {/* Add Movie page */}
        <Route path="/addMovie">
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}


export default App;
