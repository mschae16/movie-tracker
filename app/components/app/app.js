import React from 'react';
import LoginContainer from '../../containers/loginContainer';
import MovieIndexContainer from '../../containers/movieIndexContainer';
import CreateUser from '../createuser/createuser';
import { Route } from 'react-router';

const App = () => {
	return (
		<div>
			<Route exact path="/login" component={LoginContainer} />
			<Route exact path="/" component={MovieIndexContainer} />
      <Route exact path="/createuser" component={CreateUser} />
		</div>
	);
};


export default App;
