import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavHeader extends Component {
	render() {
		const { loginSuccess, createUserSuccess } = this.props
		console.log(this.props);
		if (createUserSuccess === 'success' || loginSuccess === 'success') {
			console.log('success sign out');
      return (
        <button>Sign Out</button>
      )
    }

		return (
			<div className="navigation-container">
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
