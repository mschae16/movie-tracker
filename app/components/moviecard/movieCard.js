import React from "react";

const MovieCard = ({
  title,
  overview,
  backdrop_path,
  poster_path,
  release_date
}) => {
  let backDrop;

  if (poster_path) {
    backDrop = `https://image.tmdb.org/t/p/w500${poster_path}`;
  }

  return (
    <div className="movie-card">
      <h5 className="movie-title">{title}</h5>
      <img className="movie-image" src={backDrop} alt="backdrop image" />
    </div>
  );
};

export default MovieCard;

// <button className="favorite-button">Fav</button>
