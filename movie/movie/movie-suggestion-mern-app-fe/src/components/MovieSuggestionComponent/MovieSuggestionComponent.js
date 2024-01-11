import React, { Component } from 'react'
import './MovieSuggestionComponent.css'
import MovieComponent from '../MovieComponent/MovieComponent'

class MovieSuggestionComponent extends Component {
    
  constructor(props)
    {
        super(props)

        this.state = {
          movieGenre1:'',
          movieGenre2:'',
          suggestedMovies:[]
        }
    }

    movieGenre1Handler = (event) => {
        this.setState({
            movieGenre1 : event.target.value
        })
    }
    movieGenre2Handler = (event) => {
        if (event.target.value != this.state.movieGenre1)
        {
        this.setState({
            movieGenre2 : event.target.value
        })
        }
        else
        {
            alert(`Two genres can't be same`)
        }
    }

    formSubmitHandler = (event) =>{
        event.preventDefault()

        fetch('http://localhost:3500/api/v1/movie/suggest',{
        method:'POST',
        crossDomain: true,
        headers: {
            'Content-type':'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          movieGenre1:this.state.movieGenre1,
          movieGenre2:this.state.movieGenre2
        })
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.ErrorMessage)
            {
                alert(data.message)
            }
            else{
                console.log(data);
                this.setState({suggestedMovies:data})
                console.log(this.state.suggestedMovies);
            }
        })
    }

  render() {
    const {movieGenre1, movieGenre2, suggestedMovies} = this.state
    return (
        <React.Fragment>
        <form className='form-container' onSubmit={this.formSubmitHandler}>
            <h2>Get movie suggestions</h2>
            <div className='form-group'>
            <label>Movie Genre 1</label>
            <select
            value={movieGenre1}
            onChange={this.movieGenre1Handler}
            required
            >
            <option value="">-- Please select --</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="SciFi">SciFi</option>
            <option value="Horror">Horror</option>
            <option value="Thriller">Thriller</option>
            <option value="Romance">Romance</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Animation">Animation</option>
            <option value="Adventure">Adventure</option>
            <option value="Crime">Crime</option>
            <option value="Biography">Biography</option>
            </select>
        </div>

        <div className='form-group'>
            <label>Movie Genre 2</label>
            <select
            value={movieGenre2}
            onChange={this.movieGenre2Handler}
            required
            >
            <option value="">-- Please select --</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="SciFi">SciFi</option>
            <option value="Horror">Horror</option>
            <option value="Thriller">Thriller</option>
            <option value="Romance">Romance</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Animation">Animation</option>
            <option value="Adventure">Adventure</option>
            <option value="Crime">Crime</option>
            <option value="Biography">Biography</option>
            </select>
        </div>

        <div>
            <button type='submit'>Get suggestions</button>
        </div>
        </form>

        <div className='suggested-movies'>
        {suggestedMovies.map(movieItem=>(
            <MovieComponent movieItem={movieItem}/>
        ))}
        </div>
        </React.Fragment>
        
    )
  }
}

export default MovieSuggestionComponent