import { connect } from 'react-redux';
import { loginLogoutUser } from '../actions';
import Login from '../components/login/login';

const mapStateToProps = (store) => {
  return {
    loginLogoutSuccess: store.loginLogoutSuccess.status,
    loginHasErred: store.loginHasErred
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (user) => {
      dispatch(loginLogoutUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
