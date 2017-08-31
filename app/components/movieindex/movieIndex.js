import React, { Component } from "react";
import MovieCard from '../moviecard/movieCard';

export default class MovieIndex extends Component {
  componentDidMount() {
    this.props.fetchData(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=ba0993c341c9d28ee2f7a29572ff918d&language=en-US`
    );
  }

  render() {
    const { createUserSuccess, hasErred, isLoading, movieData, loginSuccess } = this.props
    if (hasErred) {
      return <p>You fucked up</p>;
    }

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const mappedMovieData = movieData.map(movie => {
      return <MovieCard key={movie.title} { ...movie } />
    });

    return <div className="wrapper">{mappedMovieData}</div>;
  }
}
