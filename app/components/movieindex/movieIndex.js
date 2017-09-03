import React, { Component } from 'react';
import movieIndexContainer from '../../containers/movieIndexContainer';
import MovieCard from '../moviecard/movieCard';
import { Redirect } from 'react-router';

export class MovieIndex extends Component {
	constructor() {
		super();
		this.state = {
			redirect: false
		};
	}

	retrieveFromStorage() {
		return JSON.parse(localStorage.getItem('user'))
	}
	componentDidMount() {
		this.props.fetchData(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=7a09ea0565fc41e80aedf1cf7fdbdd9c&language=en-US`
		);

		const userObj = this.retrieveFromStorage()
		if (userObj) {
			this.props.loginLogoutUser(userObj)
		}

		const { loginLogoutSuccess, user, retrieveFavorites } = this.props;

		if (loginLogoutSuccess === 'success') {
			retrieveFavorites(user.id);
		}
	}

	componentWillReceiveProps(nextProps) {
		const { user, retrieveFavorites } = nextProps;

		if (this.props.loginLogoutSuccess !== nextProps.loginLogoutSuccess && nextProps.user.status === 'success') {
			retrieveFavorites(user.id)
		}
	}

	handleFavorites(movie) {
		const {
			loginLogoutSuccess,
			user,
			addToFaves,
			removeFromFaves
		} = this.props;


		movie.user_id = user.id;

		if (loginLogoutSuccess === '' && movie) {
			this.setState({
				redirect: true
			});
		} else if (!movie.isFaved) {
			addToFaves(movie);
		} else if (movie.isFaved) {
			removeFromFaves(movie);
		}
	}

	handleMovieDisplay() {
		const { favoritesData, movieData, loginLogoutSuccess } = this.props;


		if (favoritesData.length > 0) {
			const favoritesID = favoritesData.map(favorite => favorite.movie_id);

			return movieData.map(movie => {
				if (favoritesID.includes(movie.id)) {
					return Object.assign({}, movie, { isFaved: true });
				}
				return movie;
			});
		} else {
			return movieData;
		}
	}

	render() {

		const { loginLogoutSuccess, user, retrieveFavorites } = this.props;

		// if (loginLogoutSuccess === 'success') {
		// 	console.log('logged in!');
		// 	retrieveFavorites(user.id);
		// }

		const { hasErred, isLoading, movieData } = this.props;

		if (hasErred) {
			return <p>You fucked up</p>;
		}

		if (isLoading) {
			return <p>Loading...</p>;
		}

		if (this.state.redirect === true) {
			return <Redirect to="/login" />;
		}

		const mappedMovieData = this.handleMovieDisplay().map(movie => (
			<MovieCard
				key={movie.title}
				{...movie}
				handleFavorites={this.handleFavorites.bind(this)}
			/>
		));

		return (
			<div>
				<section className="wrapper">{mappedMovieData}</section>
			</div>
		);
	}
}

export default movieIndexContainer(MovieIndex);
