import React from "react";
import LoginContainer from "../../containers/loginContainer";
import MovieIndex from "../movieindex/movieIndex";
import CreateUserContainer from "../../containers/createUserContainer";
import NavHeaderContainer from "../../containers/navHeaderContainer";
import Favorites from "../favorites/Favorites";
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
            </div>
          );
        }}
      />
      <Route exact path="/favorites" component={Favorites} />
      <Route exact path="/" render={() => <MovieIndex />} />
    </div>
  );
};

export default App;
