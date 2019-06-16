
import React, { Fragment } from 'react'
import { string, func } from 'prop-types'
import { Form } from 'react-final-form'
import Field from '../../Field'
import { loginValidation } from '../../../../utils/validation/user'
import styles from '../Authorization.styl'

// TODO унифицировать с SingUp
const Login = ({ submitError, switchToSignUp, submitLogin }) => {
  const onSubmit = values => submitLogin(values)

  return (
    <Fragment>
      <Form
        onSubmit={onSubmit}
        validate={loginValidation}
        render={({ handleSubmit, pristine, hasValidationErrors }) => (
          // TODO: разобраться с autocomplete='off'
          <form autoComplete="off" className={styles['form-login']} onSubmit={handleSubmit}>
            <Field id="login_email_field" name="email" type="email" label="Email" />
            <Field id="login_password_field" name="password" type="password" label="Password" />

            <button type="submit" disabled={pristine || hasValidationErrors}>
              Log in
            </button>
          </form>
        )}
      />

      {submitError &&
        <div className={styles.error}>{submitError}</div>
      }

      <div className={styles['sign-up']}>
        Haven’t account yet? <button type="button" onClick={switchToSignUp}>Sign up!</button>
      </div>
    </Fragment>
  )
}

Login.propTypes = {
  submitError: string,
  submitLogin: func,
  switchToSignUp: func,
}

export default Login
