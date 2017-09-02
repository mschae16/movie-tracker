import { connect } from "react-redux";
import movieIndex from "../components/movieindex/movieIndex";
import { fetchData, addToFaves } from "../actions";

const mapStateToProps = store => {
  return {
    movieData: store.fetchDataSuccess,
    hasErred: store.hasErred,
    isLoading: store.isLoading,
    user: store.loginLogoutSuccess,
    loginLogoutSuccess: store.loginLogoutSuccess.status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(fetchData(url)),
    addToFaves: movie => dispatch(addToFaves(movie))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(movieIndex);
