import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavHeader extends Component {
  render() {
    const { loginSuccess, createUserSuccess } = this.props;

    return (
      <div>
        <section className="navigation-wrapper">
          <div className="slide-right">
            <header className="movie-tracker-header">MovieTracker</header>
          </div>
          <p> Hello NAME </p>
          <p> Favorites </p>
          <p>Logout</p>

          <NavLink activeClassName="selected" className="nav" to="/">
            Home
          </NavLink>

          {loginSuccess !== "success" && createUserSuccess !== 'success' && (
            <NavLink activeClassName="selected" className="nav" to="/login">
              Login
            </NavLink>
          )}

          {createUserSuccess !== "success" && loginSuccess !== 'success' && (
            <NavLink
              activeClassName="selected"
              className="nav"
              to="/createuser"
            >
              CreateUser
            </NavLink>
          )}

          {(createUserSuccess === "success" || loginSuccess === "success") && (
            <button>Sign Out</button>
          )}
        </section>
      </div>
    );
  }
}
