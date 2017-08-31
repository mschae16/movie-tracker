import { connect } from 'react-redux';
import NavHeader from '../components/navheader/NavHeader';
import { signOutUser } from '../actions';

const mapStateToProps = (store) => {
  return {
    loginSuccess: store.loginSuccess,
    createUserSuccess: store.createUserSuccess.status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSignOut: () => dispatch(signOutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavHeader)
