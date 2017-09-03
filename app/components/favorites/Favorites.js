import React, { Component } from "react";
import movieIndexContainer from "../../containers/movieIndexContainer";
import MovieCard from "../moviecard/movieCard";
import { Redirect } from "react-router";

export class Favorites extends Component {
  constructor() {
    super()
  }

	componentDidMount() {
    const { loginLogoutSuccess, user, retrieveFavorites } = this.props

    if (loginLogoutSuccess === 'success') {
      retrieveFavorites(user.id)
    }
	}

  render() {
    const { loginLogoutSuccess, hasErred, isLoading, favoritesData, removeFromFaves, user } = this.props;

    if (loginLogoutSuccess === "") {
      return <Redirect to="/login" />;
    }

		if (hasErred) {
			return <p>You fucked up</p>;
		}

		if (isLoading) {
			return <p>Loading...</p>;
		}
    const mappedFavoritesData = favoritesData.map( movie => (
      <MovieCard
        key={movie.title}
        {...movie}
        user={user.id}
        handleFavorites={removeFromFaves}
      />
    ));

    return (
      <div>
        <section className="wrapper">{mappedFavoritesData}</section>
      </div>
    );
  }
}

export default movieIndexContainer(Favorites);
