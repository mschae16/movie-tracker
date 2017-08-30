export const createUserErred = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_USER_ERRED': {
      return action.createUserErred
    }
    default:
      return state
  }
}

export const createUserSuccess = (state = {}, action) => {
  switch(action.type) {
    case 'CREATE_USER_SUCCESS': {
      return action.newUser
    }
    default:
      return state
  }
}
