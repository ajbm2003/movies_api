const express = require('express');
const router = express.Router();
const movieRouter= require('./movie.router');
const directorRouter= require('./director.router');
const actorRouter= require('./actor.router');
const genreRouter= require('./genre.router');

// colocar las rutas aquí
router.use(movieRouter);
router.use(directorRouter);
router.use(actorRouter);
router.use(genreRouter);
module.exports = router;