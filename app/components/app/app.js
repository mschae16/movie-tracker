import React from "react";
import LoginContainer from "../../containers/loginContainer";
import MovieIndex from "../movieindex/movieIndex";
import CreateUserContainer from "../../containers/createUserContainer";
import NavHeaderContainer from "../../containers/navHeaderContainer";
import Favorites from '../favorites/Favorites';
import { Route } from "react-router";

const App = () => {
  return (
    <div>
      <NavHeaderContainer />
      <Route
        exact
        path="/createuser"
        render={() => {
          return (
            <div>
              <CreateUserContainer />
              <MovieIndex />
            </div>
          );
        }}
      />
      <Route
        exact
        path="/login"
        render={() => {
          return (
            <div>
              <LoginContainer />
              <MovieIndex />
            </div>
          );
        }}
      />
    <Route exact path="/favorites" render={() => {
        return (
          <div>
            <Favorites />
          </div>
        )
      }} />
      <Route exact path="/" component={MovieIndex} />
    </div>
  );
};

export default App;
