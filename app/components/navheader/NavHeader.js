import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavHeader extends Component {
  logoutReRender() {
    const { handleLogout, resetFavorites } = this.props;
    const logOutObject = { status: "" };

    handleLogout(logOutObject);
    resetFavorites([]);
    localStorage.removeItem("user");
  }

  render() {
    const { loginLogoutSuccess, user, handleLogout } = this.props;

    return (
      <div>
        <section className="navigation-wrapper">
          <div className="slide-right">
            <header className="movie-tracker-header">MovieTracker</header>
          </div>
          <div className="nav-links">
            <NavLink activeClassName="selected" className="nav" exact to="/">
              Home
            </NavLink>

            {loginLogoutSuccess !== "success" && (
              <NavLink activeClassName="selected" className="nav" exact to="/login">
                Login
              </NavLink>
            )}

            {loginLogoutSuccess !== "success" && (
              <NavLink
                activeClassName="selected"
                className="nav"
                exact to="/createuser"
              >
                CreateUser
              </NavLink>
            )}

            {loginLogoutSuccess === "success" && (
              <button
                className="sign-out-btn"
                onClick={() => this.logoutReRender()}
              >
                Sign Out
              </button>
            )}

            <NavLink activeClassName="selected" className="nav" exact to="/favorites">
              Favorites
            </NavLink>
          </div>
        </section>
      </div>
    );
  }
}
