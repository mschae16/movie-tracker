import React, { Component } from 'react';
import ApiHelper from '../../helpers/apiUtils';
import MovieIndex from '../movieindex/movieindex';

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

  render() {

    const { movieData } = this.state

    return (
      <div>
        <MovieIndex movieData={ movieData } />
      </div>
    )
  }
}
