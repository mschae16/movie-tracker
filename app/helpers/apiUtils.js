import apiKey from '../../keys/lauraKey'

export default class ApiHelper {
  constructor() {
    this.recentMovies = this.fetchMovies()
  }

  fetchMovies() {
    const movieData = fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US`)
      .then( response => response.json())

    return new Promise((resolve, reject) => {
      resolve(movieData)
    })
    .catch((e) => {reject(e)})
  }
}
