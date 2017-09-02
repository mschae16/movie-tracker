export const removeFavesErred = (state = false, action) => {
  switch (action.type) {
    case 'REMOVE_FAVES_ERRED':
      return action.removeFavesErred

    case 'REMOVE_FAVES_SUCCESS':
      return false
      
    default:
      return state
  }
}
