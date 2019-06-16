
import React, { Fragment } from 'react'
import { string, func } from 'prop-types'
import { Form } from 'react-final-form'
import Field from '../../Field'
import { registerValidation } from '../../../../utils/validation/user'
import styles from '../Authorization.styl'

// TODO унифицировать с Login
const SignUp = ({ submitError, switchToLogin, submitSignUp }) => {
  const onSubmit = values => submitSignUp(values)

  return (
    <Fragment>
      <Form
        onSubmit={onSubmit}
        validate={registerValidation}
        render={({ handleSubmit, pristine, hasValidationErrors }) => (
          // TODO: разобраться с autocomplete='off'
          <form autoComplete="off" className={styles['form-sing-up']} onSubmit={handleSubmit}>
            <Field id="sign_up_name_field" name="name" type="text" label="Name" />
            <Field id="sign_up_email_field" name="email" type="email" label="Email" />
            <Field id="sign_up_password_field" name="password" type="password" label="Password" />
            <Field id="sign_up_confirmPassword_field" name="confirmPassword" type="password" label="Confirm password" />

            <button type="submit" disabled={pristine || hasValidationErrors}>
              Sign up
            </button>
          </form>
        )}
      />

      {submitError &&
        <div className={styles.error}>{submitError}</div>
      }

      <div className={styles.login}>
        Already have account? <button type="button" onClick={switchToLogin}>Log in!</button>
      </div>
    </Fragment>
  )
}

SignUp.propTypes = {
  submitError: string,
  submitSignUp: func,
  switchToLogin: func,
}

export default SignUp
