import React from 'react';

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
