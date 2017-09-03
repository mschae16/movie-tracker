
export const retrieveFavesSuccess = (state = [], action) => {
  switch (action.type) {
    case "RETRIEVE_FAVES_SUCCESS":
      return action.favoritesArray

    default:
      return state
  }
}
