export const loginLogoutSuccess = (state = {status: ''}, action) => {
	switch (action.type) {
		case 'LOGIN_SUCCESS': {
			return action.user
		}
		default:
			return state;
	}
};

export const loginHasErred = (state = false, action) => {
	switch (action.type) {
		case 'LOGIN_HAS_ERRED': {
			return action.loginErred
		}

		default:
			return state
	}
}
