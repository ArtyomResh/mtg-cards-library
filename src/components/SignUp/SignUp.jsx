
import React, { PureComponent, Fragment } from 'react'
import { bool } from 'prop-types'
import { Form, Field } from 'react-final-form'
import { registerValidation } from '../../../utils/validation/user'
import './SignUp.styl'

class SignUp extends PureComponent {
  handleSubmit = values => {
    this.props.submitSignUp(values)
  }

  render() {
    return <Form
      onSubmit={this.handleSubmit}
      validate={registerValidation}
      render={({ handleSubmit, pristine, invalid }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field name="name" >
              {({ input, meta }) => (
                <Fragment>
                  <label>Name</label>
                  <input {...input} type="text" placeholder="Name" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </Fragment>
              )}
            </Field>
          </div>

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

          <div>
            <Field name="confirmPassword" >
              {({ input, meta }) => (
                <Fragment>
                  <label>Confirm password</label>
                  <input {...input} type="password" placeholder="Confirm password" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </Fragment>
              )}
            </Field>
          </div>

          <button type="submit" disabled={pristine || invalid}>
            Sign up
          </button>
        </form>
      )}
    />
  }
}

export default SignUp
