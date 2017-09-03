export const loginHasErred = bool => {
  return {
    type: "LOGIN_HAS_ERRED",
    loginErred: bool
  };
};

export const loginLogoutSuccess = user => {
  return {
    type: "LOGIN_SUCCESS",
    user
  };
};

export const loginLogoutUser = user => {
  return dispatch => {
    fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.status !== 200) {
          dispatch(loginHasErred(true));
        } else {
          return response;
        }
      })
      .then(response => response.json())
      .then(parsedResponse =>
        dispatch(
          loginLogoutSuccess(
            Object.assign(
              {},
              parsedResponse.data,
              { password: "Dont even think about it" },
              { status: parsedResponse.status }
            )
          )
        )
      )
      .catch(() => dispatch(loginHasErred(true)));
  };
};

export const fetchHasErred = bool => {
  return {
    type: "FETCH_HAS_ERRED",
    hasErred: bool
  };
};

export const fetchIsLoading = bool => {
  return {
    type: "FETCH_IS_LOADING",
    isLoading: bool
  };
};

export const fetchDataSuccess = data => {
  return {
    type: "FETCH_DATA_SUCCESS",
    data
  };
};

export const fetchData = url => {
  return dispatch => {
    dispatch(fetchIsLoading(true));

    fetch(url)
      .then(response => {
        if (response.status !== 200) {
          dispatch(fetchHasErred(true));
        }

        dispatch(fetchIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(parsedResponse =>
        dispatch(fetchDataSuccess(parsedResponse.results))
      )
      .catch(() => dispatch(fetchHasErred(true)));
  };
};

export const createUserErred = bool => {
  return {
    type: "CREATE_USER_ERRED",
    createUserErred: bool
  };
};

export const createUser = newUser => {
  return dispatch => {
    fetch("/api/users/new", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.status !== 200) {
          dispatch(createUserErred(true));
        } else {
          return response;
        }
      })
      .then(response => response.json())
      .then(parsedResponse =>
        dispatch(
          loginLogoutSuccess(
            Object.assign(
              {},
              {
                name: newUser.name,
                email: newUser.email
              },
              { password: "Dont even think about it" },
              {
                status: parsedResponse.status,
                id: parsedResponse.id
              }
            )
          )
        )
      )
      .catch(() => dispatch(createUserErred(true)));
  };
};

export const addToFavesSuccess = movie => {
  return {
    type: "ADD_TO_FAVES_SUCCESS",
    movie
  };
};

export const addToFavesErred = bool => {
  return {
    type: "ADD_TO_FAVES_ERRED",
    addToFavesErred: bool
  };
};

export const addToFaves = movie => {
  return dispatch => {
    fetch("api/users/favorites/new", {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.status !== 200) {
          dispatch(addToFavesErred(true));
        } else {
          return response;
        }
      })
      .then(() => dispatch(addToFavesSuccess(movie)))
      .catch(() => {
        dispatch(addToFavesErred(true));
      });
  };
};

export const removeFavesSuccess = movie => {
  return {
    type: "REMOVE_FAVES_SUCCESS",
    movie
  };
};

export const removeFavesErred = bool => {
  return {
    type: "REMOVE_FAVES_ERRED",
    removeFavesErred: bool
  };
};

export const removeFromFaves = movie => {
  return dispatch => {
    fetch(`api/users/${movie.user_id}/favorites/${movie.movie_id}`, {
      method: "DELETE",
      body: JSON.stringify([movie.user_id, movie.movie_id]),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        debugger
        if (response.status !== 200) {
          dispatch(removeFavesErred(true));
        } else {
          return response;
        }
      })
      .then(() => dispatch(removeFavesSuccess(movie)))
      .catch(() => {
        dispatch(removeFavesErred(true));
      });
  };
};

export const retrieveFavesSuccess = (favoritesArray) => {
  return {
    type: "RETRIEVE_FAVES_SUCCESS",
    favoritesArray
  }
}

export const retrieveAllFaves = userId => {
  return dispatch => {
    dispatch(fetchIsLoading(true));

    fetch(`api/users/${userId}/favorites`)
      .then(response => {
        if (response.status !== 200) {
          dispatch(fetchHasErred(true));
        }

        dispatch(fetchIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(parsedResponse => dispatch(retrieveFavesSuccess(parsedResponse.data)))
      .catch(() => dispatch(fetchHasErred(true)));
  };
};
