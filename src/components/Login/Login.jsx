
import React, { PureComponent, Fragment } from 'react'
import { bool } from 'prop-types'
import { Form, Field } from 'react-final-form'
import { loginValidation } from '../../../utils/validation/user'
import './Login.styl'

class Login extends PureComponent {
  handleSubmit = values => {
    this.props.submitLogin(values)
  }

  render() {
    return this.props.isLogedIn 
      ? <button>Log out</button>
      : <Form
        onSubmit={this.handleSubmit}
        validate={loginValidation}
        render={({ handleSubmit, pristine, invalid }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field name="email" >
                {({ input, meta }) => (
                  <Fragment>
                    <label>Email</label>
                    <input {...input} type="email" placeholder="Email" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </Fragment>
                )}
              </Field>
            </div>

            <div>
              <Field name="password" >
                {({ input, meta }) => (
                  <Fragment>
                    <label>Password</label>
                    <input {...input} type="password" placeholder="Password" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </Fragment>
                )}
              </Field>
            </div>

            <button type="submit" disabled={pristine || invalid}>
              Log in
            </button>
          </form>
        )}
      />
  }
}

Login.propTypes = {
  isLogedIn: bool,
}

export default Login
