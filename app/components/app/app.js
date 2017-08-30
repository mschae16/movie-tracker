import React from 'react';
import LoginContainer from '../../containers/loginContainer'
import MovieIndexContainer from '../../containers/movieIndexContainer'
// import CreateUser from '../createuser/createuser';
import { Route, NavLink, Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
    <LoginContainer />
    <MovieIndexContainer />
    </div>
  )
}

  // <Route exact path='/login' component={ Login } />
  // <Route exact path='/' render={ ()=> <MovieIndex movieData={ movieData }/>} />
  // <Route exact path='/createuser' component={ CreateUser } />

export default App;
