export const fetchHasErred = (state = false, action) => {
  switch (action.type) {
    case "FETCH_HAS_ERRED":
      return action.hasErred;

    default:
      return state;
  }
};

export const fetchIsLoading = (state = false, action) => {
  switch (action.type) {
    case "FETCH_IS_LOADING":
      return action.isLoading;

    default:
      return state;
  }
};

export const fetchDataSuccess = (state = [], action) => {
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return action.data.map( movie => {
        return Object.assign({}, movie, { isFaved: false })
      });

    case "ADD_TO_FAVES_SUCCESS":
      return state.map( movie => {
        if ( action.movie.title === movie.title ) {
          return Object.assign({}, movie, action.movie, { isFaved: true })
        }
        return movie
      })

    case "REMOVE_FAVES_SUCCESS":
      return state.map( movie => {
        if (action.movie.title === movie.title) {
          return Object.assign({}, movie, action.movie, { isFaved: false })
        }
        return movie
      })
      
    default:
      return state;
  }
};
