
import React, { PureComponent } from 'react'
import Login from './Login'
import SignUp from './SignUp'

class Authorization extends PureComponent {
  state = {
    needToSignUp: false,
  }

  switchToLogin = () => {
    this.setState({
      needToSignUp: false,
    })
  }

  switchToSignUp = () => {
    this.setState({
      needToSignUp: true,
    })
  }

  render() {
    return this.state.needToSignUp
      ? <SignUp switchToLogin={this.switchToLogin} />
      : <Login switchToSignUp={this.switchToSignUp} />
  }
}

export default Authorization
