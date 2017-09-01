export const createUserErred = (state = false, action) => {
  switch (action.type) {
    case 'CREATE_USER_ERRED': {
      return action.createUserErred
    }
    case 'LOGIN_SUCCESS': {
      return false
    }
    default:
      return state
  }
}
