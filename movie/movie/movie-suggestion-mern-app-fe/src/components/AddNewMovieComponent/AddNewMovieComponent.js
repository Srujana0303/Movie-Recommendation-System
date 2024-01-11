import React, { Component } from 'react'
import './AddNewMovieComponent.css'

class AddNewMovieComponent extends Component {
  constructor(props)
    {
        super(props)

        this.state = {
            movieName : '',
            movieYear : '',
            movieGenre1 : '',
            movieGenre2 : '',
            imdbRating: 0
        }
    }
    
    movieNameHandler = (event) => {
        this.setState({
            movieName : event.target.value
        })
    }
    movieYearHandler = (event) => {
        this.setState({
            movieYear : event.target.value
        })
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
    imdbRatingHandler = (event) => {
        this.setState({
            imdbRating : event.target.value
        })
    }
    
    formSubmitHandler = (event) =>{
        event.preventDefault()

        fetch('http://localhost:3500/api/v1/movie/addMovie',{
        method:'POST',
        crossDomain: true,
        headers: {
            'Content-type':'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            movieName : this.state.movieName,
            movieYear : this.state.movieYear,
            movieGenre1 : this.state.movieGenre1,
            movieGenre2 : this.state.movieGenre2,
            imdbRating: this.state.imdbRating
        })
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (data.ErrorMessage)
            {
                alert(data.ErrorMessage)
            }
            else{
                alert(`The new movie is added successfully`)
                window.location.href = '/'
            }
        })
    }

  render() {
    const {movieName, movieYear, movieGenre1, movieGenre2, imdbRating} = this.state
    return (
        <form className='form-container' onSubmit={this.formSubmitHandler}>
            <h2>Adding a new Movie data</h2>

        <div className='form-group'>
            <label>Movie Name</label>
            <input
            type='text'
            placeholder='Enter the movie name'
            value={movieName}
            onChange={this.movieNameHandler}
            required
            />
        </div>

        <div className='form-group'>
            <label>Movie Year</label>
            <input
            type='text'
            placeholder='Enter the year of release'
            value={movieYear}
            onChange={this.movieYearHandler}
            required
            />
        </div>

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

        <div className='form-group'>
            <label>IMDb Rating</label>
            <input
            type='text'
            placeholder='Enter the IMDb Rating'
            value={imdbRating}
            onChange={this.imdbRatingHandler}
            required
            />
        </div>

        <div>
            <button type='submit'>Add</button>
        </div>
        </form>
        
    )
  }
}

export default AddNewMovieComponent