import { connect } from 'react-redux'
import * as signUpActions from '../../reducers/signUp'
import SignUp from './SignUp'

const mapStateToProps = () => {}

const mapDispatchToProps = {
  submitSignUp: signUpActions.submitSignUp,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp)
