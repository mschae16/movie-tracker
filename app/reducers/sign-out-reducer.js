export const logOutUser = (state = 'success', action) => {
  switch (action.type) {
    case 'LOG_OUT_USER':
      return action.loginSuccess

    default:
      return state
  }
}

export const createUserSignOut = (state = {status: 'success'}, action) => {
  switch (action.type) {
    case 'CREATE_USER_SIGNOUT':
      return action.createUserSuccess

    default:
      return state
  }
}
