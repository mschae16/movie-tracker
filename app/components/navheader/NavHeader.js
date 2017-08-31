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
      <div>
        <section className="navigation-wrapper">
					<div className="slide-right">
          	<header className="movie-tracker-header">MovieTracker</header>
					</div>
          <p> Hello NAME </p>
					<p> Favorites </p>
          <p>Logout</p>

          <NavLink activeClassName="selected" className="nav" to="/">Home</NavLink>

          <NavLink activeClassName="selected" className="nav" to="/login">Login</NavLink>

          <NavLink activeClassName="selected" className="nav" to="/createuser">CreateUser</NavLink>
        </section>
      </div>
    );
  }
}
