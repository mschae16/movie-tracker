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
      return action.data;

    default:
      return state;
  }
};
