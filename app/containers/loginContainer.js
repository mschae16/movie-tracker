import { connect } from 'react-redux';
import { LoginAction } from '../actions';
import Login from '../components/login/login';

const mapStateToProps = (store) => {
  return {
    loginInfo: store.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLoginSubmit: (username, password) => {
      dispatch(LoginAction(username, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
