const movieModal = require('../model/movieModel')
const initialData = require('../data/initialData')

const getAllMovies = async(request,response) =>{
    try{
        const isMovieData = await movieModal.find()

        if (isMovieData.length === 0)
        {
            const isMovieData = await movieModal.insertMany(initialData)
        }

        const movieData = await movieModal.find({}).sort({movieYear:-1})
        response.status(200).json(movieData)
    }
    catch(error)
    {
        response.status(500).json({ErrorMessage:error.message})
    }
}

const addMovie = async(request, response) => {
    const {movieName, movieYear, movieGenre1, movieGenre2, imdbRating} = request.body
    try{
        const existingMovie = await movieModal.findOne({movieName:movieName})
        if (existingMovie)
        {
            return response.status(409).json({ErrorMessage:'Movie Name already exists.'})
        }

        const newMovieData = {
            movieName: movieName,
            movieYear: movieYear,
            movieGenre1: movieGenre1,
            movieGenre2: movieGenre2,
            imdbRating:imdbRating
        }

        const newMovie = await movieModal.insertMany(newMovieData)
        response.status(200).json(newMovie)
    }
    catch(error)
    {
        response.status(500).json({ErrorMessage:error.message})
    }
}

const suggestMovie = async(request, response) => {
    try{
        const {movieGenre1, movieGenre2} = request.body;

        const suggestedMovie = await movieModal.find({
            $and:[{$or:[
                        {movieGenre1:movieGenre1},
                        {movieGenre1:movieGenre2}
                    ]},
                {$or:[
                        {movieGenre2:movieGenre1},
                        {movieGenre2:movieGenre2}
                    ]}]
                }).sort({imdbRating:-1})

        response.status(200).json(suggestedMovie)
    }
    catch(error)
    {
        response.status(500).json({ErrorMessage:error.message})
    }
}

module.exports = {getAllMovies, addMovie, suggestMovie}