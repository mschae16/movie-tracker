import React from 'react';
import LoginContainer from '../../containers/loginContainer';
import MovieIndexContainer from '../../containers/movieIndexContainer';
// import CreateUser from '../createuser/createuser';
import { Route } from 'react-router';

const App = () => {
	return (
		<div>
			<Route exact path="/login" component={LoginContainer} />
			<Route exact path="/" component={MovieIndexContainer} />
		</div>
	);
};

// <Route exact path='/login' component={ Login } />
// <Route exact path='/' render={ ()=> <MovieIndex movieData={ movieData }/>} />
// <Route exact path='/createuser' component={ CreateUser } />

export default App;
