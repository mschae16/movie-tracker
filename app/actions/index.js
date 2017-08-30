export const LoginAction = (email, password) => {
  return {
    type: "LOG_IN",
    email,
    password
  };
};

export const fetchHasErred = (bool) => {
  return {
    type: "FETCH_HAS_ERRED",
    hasErred: bool
  }
}

export const fetchIsLoading = (bool) => {
  return {
    type: "FETCH_IS_LOADING",
    isLoading: bool
  }
}

export const fetchDataSuccess = (data) => {
  return {
    type: "FETCH_DATA_SUCCESS",
    data
  }
}
