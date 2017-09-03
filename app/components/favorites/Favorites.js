import React, { Component } from "react";
import movieIndexContainer from "../../containers/movieIndexContainer";
import MovieCard from "../moviecard/movieCard";
import { Redirect } from "react-router";

export class Favorites extends Component {
  render() {
    const { loginLogoutSuccess, movieData, user, removeFromFaves } = this.props;

    if (loginLogoutSuccess === "") {
      return <Redirect to="/login" />;
    }

    const favoriteMovieData = movieData.filter(movie => movie.isFaved);

    const displayMovieData = favoriteMovieData.map(movie => (
      <MovieCard
        key={movie.title}
        {...movie}
        handleFavorites={removeFromFaves}
      />
    ));

    return (
      <div>
        <section className="wrapper">{displayMovieData}</section>
      </div>
    );
  }
}

export default movieIndexContainer(Favorites);
