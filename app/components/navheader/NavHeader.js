import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

export default class NavHeader extends Component {
	render() {
		return (
			<div classNamegit ="navigation-container">
				<h1>Movie Tracker</h1>
				<NavLink to="/">Home</NavLink>

				<NavLink to="/login">Login</NavLink>

				<NavLink to="/createuser">CreateUser</NavLink>
			</div>
		);
	}
}

// export default NavHeader;

//***probably need to make this a child component of NavHeader container***
