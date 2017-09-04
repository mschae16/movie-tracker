import addToFavesErred from './add-faves-reducer'
import createUserErred from './create-user-reducer'
import fetchHasErred from './fetch-reducers'
import fetchIsLoading from './fetch-reducers'
import fetchDataSuccess from './fetch-reducers'
import loginLogoutSuccess from './login-reducer'
import loginHasErred from './login-reducer'
import removeFavesErred from './remove-faves-reducer'
import retrieveFavesSuccess from './retrieve-faves-reducer'
import logOutUser from './sign-out-reducer'
import createUserSignOut from './sign-out-reducer'
import mockMovieData from '../helpers/mockMovieData'
import mockMovieObject from '../helpers/mockMovieObject'

describe('add to faves reducer', () => {
  it('it should give me a default state', () => {
    expect(addToFavesErred(undefined, {})).toEqual(false)
  })

  it('should give me an error message', () => {
    const action = { type: 'ADD_TO_FAVES_ERRED', addToFavesErred: true}
    expect(addToFavesErred(undefined, action)).toEqual(true)
  })

  it('should give me a state of false when successful', () => {
    const action = { type: 'ADD_TO_FAVES_SUCCESS', {}}
      expect(addToFavesErred(undefined, action)).toEqual(false)
  })
})

describe('create user erred reducer', () => {
  it('it should give me a default state', () => {
    expect(createUserErred(undefined, {})).toEqual(false)
  })

  it('should give me an error message', () => {
    const action = { type: 'CREATE_USER_ERRED', createUserErred: true}
    expect(createUserErred(undefined, action)).toEqual(true)
  })

  it('should give me a state of false when successful', () => {
    const action = { type: 'LOGIN_SUCCESS', {}}
      expect(createUserErred(undefined, action)).toEqual(false)
  })
})

describe('fetch has erred reducer', () => {
  it('it should give me a default state', () => {
    expect(fetchHasErred(undefined, {})).toEqual(false)
  })

  it('should give me an error message', () => {
    const action = { type: 'FETCH_HAS_ERRED', fetchHasErred: true}
    expect(fetchHasErred(undefined, action)).toEqual(true)
  })

  it('should give me a state of false when successful', () => {
    const action = { type: 'RETRIEVE_FAVES_SUCCESS', {}}
      expect(fetchHasErred(undefined, action)).toEqual(false)
  })
})

describe('fetch is loading reducer', () => {
  it('it should give me a default state', () => {
    expect(fetchHasErred(undefined, {})).toEqual(false)
  })

  it('should give me true for isLoading when fetch loads', () => {
    const action = { type: 'FETCH_IS_LOADING', isLoading: true}
    expect(fetchHasErred(undefined, action)).toEqual(true)
  })
})

describe('fetch data success reducer', () => {
  it('it should give me a default state', () => {
    expect(fetchHasErred(undefined, {})).toEqual([])
  })

  it('should give me a new array of movies when successful', () => {
    const action = {type: 'FETCH_DATA_SUCCESS', data: mockMovieData.results}
    const expectedResult = mockMovieData.results.map( movie => {
      return Object.assign({}, movie, {movie_id: movie.id}, { isFaved: false })
    })

    expect(fetchHasErred(undefined, action)).toEqual(true)
  })

  it('should change the correct movie object that has been favorited to favorited in the store', () => {
    const action = {type: 'ADD_TO_FAVES_SUCCESS', movie: Object.assign({}, mockMovieObject, { isFaved: false })}
    const expectedResult = mockMovieData.results.map( movie => {
        if ( action.movie.title === movie.title ) {
          return Object.assign({}, movie, action.movie, { isFaved: true })
        }
        return movie
      })

    expect(fetchDataSuccess(mockMovieData.results, action)).toEqual(expectedResult)
    )

  it('should change the correct movie object that has been removed from favorited in store')
  const action = {type: 'REMOVE_FAVES_SUCCESS', movie: Object.assign({}, mockMovieObject, { isFaved: true })}
  const expectedResult = mockMovieData.results.map( movie => {
      if ( action.movie.title === movie.title ) {
        return Object.assign({}, movie, action.movie, { isFaved: false })
      }
      return movie
    })

  expect(fetchDataSuccess(mockMovieData.results, action)).toEqual(expectedResult)
  })
})

describe('login reducer', () => {
  it('it should give me a default state for loginLogoutSuccess', () => {
    const expectedDefault = {status: ''}
    expect(loginLogoutSuccess(undefined, {})).toEqual(expectedDefault)
  })

  it('it should give me a default state for loginHasErred', () => {
    expect(loginHasErred(undefined, {})).toEqual(false)
  })

  it('should give me true for isLoading when fetch loads', () => {
    const mockUser = { id: 4,
                      name: "margo",
                      password: "Dont even think about it",
                      email: "margo@margo.com",
                      status: "success"
                      }
    const action = { type: 'LOGIN_SUCCESS', mockUser}
    expect(loginLogoutSuccess(undefined, action)).toEqual(mockUser)
  })

  it('should return false or login has erred if login successful', () => {
    const mockUser = { id: 4,
                      name: "margo",
                      password: "Dont even think about it",
                      email: "margo@margo.com",
                      status: "success"
                      }
    const action = { type: 'LOGIN_SUCCESS', mockUser}

    expect(loginHasErred(undefined, action)).toEqual(false)
  })
})

describe('remove faves reducer', () => {
  it('it should give me a default state', () => {
    expect(removesFavesErred(undefined, {})).toEqual(false)
  })

  it('should return true if remove faves erred', () => {
    const action = { type: 'REMOVE_FAVES_ERRED', removeFavesErred: true}
    expect(removesFavesErred(undefined, action)).toEqual(true)
  })

  it('should return false if remove faves successful', () => {
    const action = { type: 'REMOVE_FAVES_SUCCESS', {}}
    expect(removesFavesErred(undefined, action)).toEqual(false)
  })
})
