import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return (movieData.map(movie => {
      // return(
      //   <MovieCard title={movie.title} genres={movie.genres} IMDBRating={movie.IMDBRating } poster={movie.poster} />
      return (
        <MovieCard {...movie} />
      )
    })
    )
  }


  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
