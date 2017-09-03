
export const retrieveFavesSuccess = (state = [], action) => {
  switch (action.type) {
    case "RETRIEVE_FAVES_SUCCESS":
      return action.favoritesArray.map( favorite => Object.assign({ isFaved: true }, favorite ))

    default:
      return state
  }
}
