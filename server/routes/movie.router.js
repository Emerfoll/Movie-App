const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// Grabs movie by id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  console.log('in server with id:', id);
  const queryText = `
    SELECT "movies".title, "movies".poster, "movies".description FROM "movies"
    WHERE "movies".id = $1;
  `
  pool.query(queryText, [id]).then((response)=>{
    console.log(response);
    res.send(response.rows)
  }).catch((error)=>{
    console.log(error);
    res.sendStatus(500);
  })
})

// Grabs genre by ID 
router.get('/genre/:id', (req, res) => {
  const id = req.params.id;
  console.log('in server with id:', id);
  const queryText = `
  SELECT "genres".name FROM "genres"
  JOIN "movies_genres" ON "genres".id = "movies_genres".genre_id
  JOIN "movies" ON "movies".id = "movies_genres".movie_id
  WHERE "movies".id = $1;
  `
  pool.query(queryText, [id]).then((response)=>{
    console.log(response);
    res.send(response.rows)
  }).catch((error)=>{
    console.log(error);
    res.sendStatus(500);
  })
})



router.get('/', (req, res) => {
  const query = `SELECT * FROM movies ORDER BY "title" ASC`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })
});

router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`

  // FIRST QUERY MAKES MOVIE
  pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
  .then(result => {
    console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!
    
    const createdMovieId = result.rows[0].id

    // Now handle the genre reference
    const insertMovieGenreQuery = `
      INSERT INTO "movies_genres" ("movie_id", "genre_id")
      VALUES  ($1, $2);
      `
      // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
      pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id]).then(result => {
        //Now that both are done, send back success!
        res.sendStatus(201);
      }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
      })

// Catch for first query
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
})

module.exports = router;