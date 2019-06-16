import { connect } from 'react-redux'
import * as loginActions from '../../../reducers/login'
import Login from './Login'

const mapStateToProps = ({ login }) => ({
  submitError: login.error.message,
})

const mapDispatchToProps = {
  submitLogin: loginActions.submitLogin,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)
