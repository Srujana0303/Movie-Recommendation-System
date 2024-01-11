const express = require('express')
const router = express.Router()
const {getAllMovies, addMovie, suggestMovie} = require('../controllers/movieController')

router.route('/').get(getAllMovies)

router.route('/addMovie').post(addMovie)

router.route('/suggest').post(suggestMovie)

module.exports = router