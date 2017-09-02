import React from "react";

const MovieCard = ({
  title,
  id: movie_id,
  overview,
  backdrop_path,
  poster_path,
  release_date,
  vote_average,
  isFaved,
  handleFavorites
}) => {
  let backDrop;

  const favorited = isFaved ? 'favorited' : ''

  if (poster_path) {
    backDrop = `https://image.tmdb.org/t/p/w500${poster_path}`;
  }

  const movie = {
    title,
    overview,
    movie_id,
    poster_path,
    release_date,
    vote_average,
    isFaved
  }

  return (
    <div className={`movie-card ${favorited}`}>
      <h5 className="movie-title">{title}</h5>
      <button onClick={() => handleFavorites(movie)}>Favorite Me</button>
      <img className="movie-image" src={backDrop} alt="backdrop image" />
    </div>
  );
};

export default MovieCard;

// <button className="favorite-button">Fav</button>
