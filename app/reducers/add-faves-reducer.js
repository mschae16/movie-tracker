
export const addToFavesErred = (state = false, action) => {
  switch (action.type) {
    case "ADD_TO_FAVES_ERRED":
      return action.addToFavesErred

    case "ADD_TO_FAVES_SUCCESS":
      return false

    default:
      return state
  }
}
