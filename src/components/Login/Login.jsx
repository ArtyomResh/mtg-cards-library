
import React, { PureComponent, Fragment } from 'react'
import { Form } from 'react-final-form'
import Field from '../Field'
import { loginValidation } from '../../../utils/validation/user'
import styles from './Login.styl'

class Login extends PureComponent {
  handleSubmit = values => {
    this.props.submitLogin(values)
  }

  render() {
    return (
      <Fragment>
        <Form
          onSubmit={this.handleSubmit}
          validate={loginValidation}
          render={({ handleSubmit, pristine, invalid }) => (
            <form autoComplete="off" className={styles.form} onSubmit={handleSubmit}>
              <Field id="login_email_field" name="email" type="email" label="Email" />
              <Field id="login_password_field" name="password" type="password" label="Password" />

              <button type="submit" disabled={pristine || invalid}>
                Log in
              </button>
            </form>
          )}
        />

        <span className={styles['sign-up']}>
          Haven’t account yet? <a>Sign up!</a>
        </span>
      </Fragment>
    )
  }
}

export default Login
