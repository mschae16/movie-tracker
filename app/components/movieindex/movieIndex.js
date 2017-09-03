import React, { Component } from 'react';
import movieIndexContainer from '../../containers/movieIndexContainer';
import MovieCard from '../moviecard/movieCard';
import { Redirect } from 'react-router'

export class MovieIndex extends Component {
  constructor() {
    super()
    this.state = {
      redirect: false
    }
  }
	componentDidMount() {
		this.props.fetchData(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=7a09ea0565fc41e80aedf1cf7fdbdd9c&language=en-US`
		);
	}

  handleFavorites(movie) {
    const { loginLogoutSuccess, user, addToFaves, removeFromFaves } = this.props

    movie.user_id = user.id

    if (loginLogoutSuccess === '' && movie) {
      this.setState({
        redirect: true
      })
    } else if (!movie.isFaved) {
      addToFaves(movie)
    } else if (movie.isFaved) {
      removeFromFaves(movie)
    }
  }

	render() {
		const {
			hasErred,
			isLoading,
			movieData,
			loginLogoutSuccess
		} = this.props;
		if (hasErred) {
			return <p>You fucked up</p>;
		}

		if (isLoading) {
			return <p>Loading...</p>;
		}

    if (this.state.redirect === true) {
      return <Redirect to="/login" />
    }

		const mappedMovieData = movieData.map(movie => {
			return (
				<MovieCard
					key={movie.title}
					{...movie}
					handleFavorites={this.handleFavorites.bind(this)}
				/>
			);
		});

		return (
			<div>
				<section className="wrapper">{mappedMovieData}</section>
			</div>
		);
	}
}

export default movieIndexContainer(MovieIndex);
