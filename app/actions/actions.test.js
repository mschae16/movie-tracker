import * as actions from './index.js'

describe('actions', () => {
  it('should create an action to detect if logging in was unsuccessful', () => {
    const loginErred = bool
    const expectedAction = {
      type: 'LOGIN_HAS_ERRED',
      loginErred: bool
    }
    expect(actions.loginHasErred(bool)).toEqual(expectedAction)
  })

  it('should create an action to detect if logging in was successful', () => {
    const user = user
    const expectedAction = {
      type: 'LOGIN_SUCCESS',
      user
    }
    expect(actions.loginLogoutSuccess(user)).toEqual(expectedAction)
  })

  it('should create an action to detect if the fetch was unsuccessful', () => {
    const bool = bool
    const expectedAction = {
      type: 'FETCH_HAS_ERRED',
      hasErred: bool
    }
    expect(actions.fetchHasErred(bool)).toEqual(expectedAction)
  })

  it('should create an action to detect if the fetch was successful', () => {
    const data = data
    const expectedAction = {
      type: 'FETCH_DATA_SUCCESS',
      data
    }
    expect(actions.fetchDataSuccess(data)).toEqual(expectedAction)
  })

  it('should create an action to detect if the fetch is loading', () => {
    const bool = bool
    const expectedAction = {
      type: 'FETCH_IS_LOADING',
      isLoading: bool
    }
    expect(actions.fetchIsLoading(bool)).toEqual(expectedAction)
  })

  it('should create an action to detect if the create user was unsuccessful', () => {
    const bool = bool
    const expectedAction = {
      type: 'CREATE_USER_ERRED',
      createUserErred: bool
    }
    expect(actions.createUserErred(bool)).toEqual(expectedAction)
  })

  it('should create an action to detect if the add to favorites was unsuccessful', () => {
    const bool = bool
    const expectedAction = {
      type: 'ADD_TO_FAVES_ERRED',
      addToFavesErred: bool
    }
    expect(actions.addToFavesErred(bool)).toEqual(expectedAction)
  })

  it('should create an action to detect if the add to favorites was successful', () => {
    const movie = movie
    const expectedAction = {
      type: 'ADD_TO_FAVES_SUCCESS',
      movie
    }
    expect(actions.addToFavesSuccess(movie)).toEqual(expectedAction)
  })

  it('should create an action to detect if the remove from favorites was unsuccessful', () => {
    const bool = bool
    const expectedAction = {
      type: 'REMOVE_FAVES_ERRED',
      removeFavesErred: bool
    }
    expect(actions.removeFavesErred(bool)).toEqual(expectedAction)
  })

  it('should create an action to detect if the remove from favorites was successful', () => {
    const movie = movie
    const expectedAction = {
      type: 'REMOVE_FAVES_SUCCESS',
      movie
    }
    expect(actions.removeFavesSuccess(movie)).toEqual(expectedAction)
  })

  it('should create an action to detect if the retrieval of favorites was successful', () => {
    const expectedAction = {
      type: 'RETRIEVE_FAVES_SUCCESS',
      favoritesArray
    }
    expect(actions.retrieveFavesSuccess()).toEqual(expectedAction)
  })
})
