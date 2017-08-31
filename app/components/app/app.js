import React from "react";
import LoginContainer from "../../containers/loginContainer";
import MovieIndexContainer from "../../containers/movieIndexContainer";
import CreateUserContainer from "../../containers/createUserContainer";
import NavHeaderContainer from "../../containers/navHeaderContainer";
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
              <MovieIndexContainer />
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
              <MovieIndexContainer />
            </div>
          );
        }}
      />
      <Route exact path="/" component={MovieIndexContainer} />
    </div>
  );
};

export default App;
