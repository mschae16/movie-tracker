import { connect } from "react-redux";
import movieIndex from "../components/movieindex/movieIndex";
import { fetchData, addToFaves, removeFromFaves, retrieveAllFaves } from "../actions";

const mapStateToProps = store => {
  return {
    movieData: store.fetchDataSuccess,
    hasErred: store.hasErred,
    isLoading: store.isLoading,
    user: store.loginLogoutSuccess,
    loginLogoutSuccess: store.loginLogoutSuccess.status,
    favoritesData: store.retrieveFavesSuccess
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(fetchData(url)),
    addToFaves: movie => dispatch(addToFaves(movie)),
    removeFromFaves: movie => dispatch(removeFromFaves(movie)),
    retrieveFavorites: userId => dispatch(retrieveAllFaves(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
