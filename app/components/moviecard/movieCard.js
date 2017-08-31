import React from "react";

const MovieCard = ({ title, overview, backdrop_path, poster_path, release_date }) => {

  let backDrop;

  if (poster_path) {
    backDrop = `https://image.tmdb.org/t/p/w500${poster_path}`
  }

  return (
    <div className='movie-card'>
    <img className='movie-image' src={backDrop} alt="backdrop image"/>
    <h2>{title}</h2>
    <p>{overview}</p>
    <p>{release_date}</p>
    </div>
  )
}

export default MovieCard;
