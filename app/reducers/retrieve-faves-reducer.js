export const retrieveFavesSuccess = (state = [], action) => {
	switch (action.type) {
		case 'RETRIEVE_FAVES_SUCCESS':
			return action.favoritesArray.map(favorite =>
				Object.assign({ isFaved: true }, favorite)
			);

		case 'REMOVE_FAVES_SUCCESS':
			return state.filter(movie => movie.title !== action.movie.title)

    case 'RESET_FAVORITES':
      return action.emptyFavoritesArray

		default:
			return state;
	}
};
