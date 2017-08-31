import { connect } from 'react-redux'
import NavHeader from '../components/navheader/NavHeader'

const mapStateToProps = (store) => {
  return {
    loginSuccess: store.loginSuccess,
    createUserSuccess: store.createUserSuccess.status
  }
}

export default connect(mapStateToProps, null)(NavHeader)
