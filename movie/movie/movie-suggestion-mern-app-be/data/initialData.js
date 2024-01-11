const initialData = [
        {
		"movieName": "Inception",
		"movieYear": "2010",
		"movieGenre1": "Action",
		"movieGenre2": "SciFi",
		"imdbRating": 8.8
		},
		{
		"movieName": "The Hangover",
		"movieYear": "2009",
		"movieGenre1": "Comedy",
		"movieGenre2": "Adventure",
		"imdbRating": 7.7
		},
		{
		"movieName": "The Shawshank Redemption",
		"movieYear": "1994",
		"movieGenre1": "Drama",
		"movieGenre2": "Crime",
		"imdbRating": 9.3
		},
		{
		"movieName": "Interstellar",
		"movieYear": "2014",
		"movieGenre1": "SciFi",
		"movieGenre2": "Adventure",
		"imdbRating": 8.6
		},
		{
		"movieName": "The Conjuring",
		"movieYear": "2013",
		"movieGenre1": "Horror",
		"movieGenre2": "Thriller",
		"imdbRating": 7.5
		},
		{
		"movieName": "La La Land",
		"movieYear": "2016",
		"movieGenre1": "Romance",
		"movieGenre2": "Drama",
		"imdbRating": 8.0
		},
		{
		"movieName": "The Avengers",
		"movieYear": "2012",
		"movieGenre1": "Action",
		"movieGenre2": "Adventure",
		"imdbRating": 8.0
		},
		{
		"movieName": "Toy Story",
		"movieYear": "1995",
		"movieGenre1": "Animation",
		"movieGenre2": "Adventure",
		"imdbRating": 8.3
		},
		{
		"movieName": "The Dark Knight",
		"movieYear": "2008",
		"movieGenre1": "Action",
		"movieGenre2": "Thriller",
		"imdbRating": 9.0
		},
		{
		"movieName": "Harry Potter and the Philosopher's Stone",
		"movieYear": "2001",
		"movieGenre1": "Fantasy",
		"movieGenre2": "Adventure",
		"imdbRating": 7.6
		},
		{
		"movieName": "Deadpool",
		"movieYear": "2016",
		"movieGenre1": "Action",
		"movieGenre2": "Comedy",
		"imdbRating": 8.0
		},
		{
		"movieName": "Jurassic Park",
		"movieYear": "1993",
		"movieGenre1": "Adventure",
		"movieGenre2": "SciFi",
		"imdbRating": 8.1
		},
		{
		"movieName": "Pulp Fiction",
		"movieYear": "1994",
		"movieGenre1": "Drama",
		"movieGenre2": "Crime",
		"imdbRating": 8.9
		},
		{
		"movieName": "Finding Nemo",
		"movieYear": "2003",
		"movieGenre1": "Animation",
		"movieGenre2": "Adventure",
		"imdbRating": 8.1
		},
		{
		"movieName": "The Matrix",
		"movieYear": "1999",
		"movieGenre1": "Action",
		"movieGenre2": "SciFi",
		"imdbRating": 8.7
		},
		{
		"movieName": "The Lion King",
		"movieYear": "1994",
		"movieGenre1": "Animation",
		"movieGenre2": "Adventure",
		"imdbRating": 8.5
		},
		{
		"movieName": "Jaws",
		"movieYear": "1975",
		"movieGenre1": "Thriller",
		"movieGenre2": "Horror",
		"imdbRating": 8.0
		},
		{
		"movieName": "The Godfather",
		"movieYear": "1972",
		"movieGenre1": "Drama",
		"movieGenre2": "Crime",
		"imdbRating": 9.2
		},
		{
		"movieName": "Back to the Future",
		"movieYear": "1985",
		"movieGenre1": "Adventure",
		"movieGenre2": "Comedy",
		"imdbRating": 8.5
		},
		{
		"movieName": "The Social Network",
		"movieYear": "2010",
		"movieGenre1": "Drama",
		"movieGenre2": "Biography",
		"imdbRating": 7.7
		},
		{
		"movieName": "Guardians of the Galaxy",
		"movieYear": "2014",
		"movieGenre1": "Action",
		"movieGenre2": "SciFi",
		"imdbRating": 8.0
		},
		{
		"movieName": "Zootopia",
		"movieYear": "2016",
		"movieGenre1": "Animation",
		"movieGenre2": "Comedy",
		"imdbRating": 8.0
		},
		{
		"movieName": "The Exorcist",
		"movieYear": "1973",
		"movieGenre1": "Horror",
		"movieGenre2": "Thriller",
		"imdbRating": 8.0
		},
		{
		"movieName": "Eternal Sunshine of the Spotless Mind",
		"movieYear": "2004",
		"movieGenre1": "Drama",
		"movieGenre2": "Romance",
		"imdbRating": 8.3
		},
		{
		"movieName": "The Incredibles",
		"movieYear": "2004",
		"movieGenre1": "Animation",
		"movieGenre2": "Action",
		"imdbRating": 8.0
		},
		{
		"movieName": "Mad Max: Fury Road",
		"movieYear": "2015",
		"movieGenre1": "Action",
		"movieGenre2": "SciFi",
		"imdbRating": 8.1
		},
		{
		"movieName": "The Silence of the Lambs",
		"movieYear": "1991",
		"movieGenre1": "Thriller",
		"movieGenre2": "Crime",
		"imdbRating": 8.6
		},
		{
		"movieName": "Finding Dory",
		"movieYear": "2016",
		"movieGenre1": "Animation",
		"movieGenre2": "Adventure",
		"imdbRating": 7.3
		},
		{
		"movieName": "Avengers: Infinity War",
		"movieYear": "2018",
		"movieGenre1": "Action",
		"movieGenre2": "Adventure",
		"imdbRating": 8.4
		},
		{
		"movieName": "The Princess Bride",
		"movieYear": "1987",
		"movieGenre1": "Adventure",
		"movieGenre2": "Fantasy",
		"imdbRating": 8.0
		},
		{
		"movieName": "The Departed",
		"movieYear": "2006",
		"movieGenre1": "Crime",
		"movieGenre2": "Drama",
		"imdbRating": 8.5
		},
		{
		"movieName": "Ratatouille",
		"movieYear": "2007",
		"movieGenre1": "Animation",
		"movieGenre2": "Comedy",
		"imdbRating": 8.0
		},
		{
		"movieName": "Alien",
		"movieYear": "1979",
		"movieGenre1": "Horror",
		"movieGenre2": "SciFi",
		"imdbRating": 8.4
		},
		{
		"movieName": "The Notebook",
		"movieYear": "2004",
		"movieGenre1": "Romance",
		"movieGenre2": "Drama",
		"imdbRating": 7.8
		},
		{
		"movieName": "The Matrix",
		"movieYear": "1999",
		"movieGenre1": "Action",
		"movieGenre2": "SciFi",
		"imdbRating": 8.7
		},
		{
		"movieName": "The Lion King",
		"movieYear": "1994",
		"movieGenre1": "Animation",
		"movieGenre2": "Adventure",
		"imdbRating": 8.5
		},
		{
		"movieName": "Jaws",
		"movieYear": "1975",
		"movieGenre1": "Thriller",
		"movieGenre2": "Horror",
		"imdbRating": 8.0
		},
		{
		"movieName": "The Godfather",
		"movieYear": "1972",
		"movieGenre1": "Drama",
		"movieGenre2": "Crime",
		"imdbRating": 9.2
		},
		{
		"movieName": "Back to the Future",
		"movieYear": "1985",
		"movieGenre1": "Adventure",
		"movieGenre2": "Comedy",
		"imdbRating": 8.5
		}
]

module.exports = initialData