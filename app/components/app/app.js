import React, { Component } from 'react';
import ApiHelper from '../../helpers/apiUtils';
import MovieIndex from '../movieindex/movieindex';
import Login from '../login/login';
import LoginContainer from '../../containers/LoginContainer'
import CreateUser from '../createuser/createuser';
import { Route, NavLink, Link } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      movieData: []
    }
  }

  componentDidMount() {
    let newApi = new ApiHelper()
    newApi.fetchMovies()
      .then(data => {
        this.setState({
          movieData: data.results
        })
      })
  }
  // <Route exact path='/login' component={ Login } />
  // <Route exact path='/' render={ ()=> <MovieIndex movieData={ movieData }/>} />
  // <Route exact path='/createuser' component={ CreateUser } />

  render() {

    const { movieData } = this.state

    return (
      <div>
        <LoginContainer />
        <MovieIndex movieData={ movieData }/>
      </div>
    )
  }
}
