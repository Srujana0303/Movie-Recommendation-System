import React, {useState, useEffect} from 'react'
import './GetAllMoviesComponent.css'
import MovieComponent from '../MovieComponent/MovieComponent'

function GetAllMoviesComponent() {
    const [movies, setMovies] = useState([])

    const fetchAllMovies  = async() => {
        const response = await fetch('http://localhost:3500/api/v1/movie/')
        const data = await response.json()
        console.log(data);
        setMovies(data)
    }

    useEffect(() => {
        fetchAllMovies()
    }, [])

  return (
    <div className='movies'>
        {movies.map(movieItem=>(
            <MovieComponent movieItem={movieItem}/>
        ))}
    </div>
  )
}

export default GetAllMoviesComponent