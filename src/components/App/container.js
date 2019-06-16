import { connect } from 'react-redux'
import * as loginActions from '../../reducers/login'
import App from './App'

const mapStateToProps = state => ({
  isLogedIn: state.login.isLogedIn,
})

const mapDispatchToProps = {
  checkLogin: loginActions.checkLogin,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
