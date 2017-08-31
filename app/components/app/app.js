import React from 'react';
import LoginContainer from '../../containers/loginContainer';
import MovieIndexContainer from '../../containers/movieIndexContainer';
import CreateUserContainer from '../../containers/createUserContainer';
import { Route } from 'react-router';

const App = () => {

	return (
		<div>
      <Route exact path="/createuser" component={CreateUserContainer} />
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/" component={MovieIndexContainer} />
		</div>
	);
};


export default App;
