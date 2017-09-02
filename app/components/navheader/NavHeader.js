import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavHeader extends Component {
	render() {
		const { loginLogoutSuccess, user, handleLogout } = this.props;
		const logOutObject = { status: '' };

		return (
			<div>
				<section className="navigation-wrapper">
					<div className="slide-right">
						<header className="movie-tracker-header">MovieTracker</header>
					</div>

					<NavLink activeClassName="selected" className="nav" to="/">
						Home
					</NavLink>

					{loginLogoutSuccess !== 'success' && (
						<NavLink activeClassName="selected" className="nav" to="/login">
							Login
						</NavLink>
					)}

					{loginLogoutSuccess !== 'success' && (
						<NavLink
							activeClassName="selected"
							className="nav"
							to="/createuser"
						>
							CreateUser
						</NavLink>
					)}

					{loginLogoutSuccess === 'success' && (
						<button onClick={() => handleLogout(logOutObject)}>Sign Out</button>
					)}

						<NavLink activeClassName="selected" className="nav" to="/favorites">
							Favorites
						</NavLink>
            
				</section>
			</div>
		);
	}
}
