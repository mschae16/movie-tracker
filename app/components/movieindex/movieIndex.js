import React from 'react';
// import './movieIndex.css';

const MovieIndex = ({ movieData }) => {

  const mappedMovies = movieData.map( movie => {
    return (
      <div>
        { movie.title }
      </div>
    )
  })

  return (
    <div>
    { mappedMovies }
    </div>
  )
}

export default MovieIndex;
