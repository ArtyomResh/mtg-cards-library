import { isEmpty } from 'ramda'
import {
  composeValidators,
  equalsTo,
  email,
  alphanum,
  required,
  minLength,
  maxLength,
} from './validators'

const validateName = composeValidators(required(), minLength(3), maxLength(30), alphanum())
const validateEmail = composeValidators(required(), email())
const validatePassword = composeValidators(required(), minLength(6), maxLength(20), alphanum())

const loginValidation = values => {
  let errors = {}

  const emailErrors = validateEmail(values.email)
  const passwordErrors = validatePassword(values.password)

  if (emailErrors) {
    errors.email = emailErrors
  }

  if (passwordErrors) {
    errors.password = passwordErrors
  }

  return isEmpty(errors) ? null : errors
}

const registerValidation = values => {
  let errors = {}

  const nameErrors = validateName(values.name)
  const emailErrors = validateEmail(values.email)
  const passwordErrors = validatePassword(values.password)
  const confirmPasswordErrors = composeValidators(required(), equalsTo(values.password))(values.confirmPassword)

  if (nameErrors) {
    errors.name = nameErrors
  }

  if (emailErrors) {
    errors.email = emailErrors
  }

  if (passwordErrors) {
    errors.password = passwordErrors
  }

  if (confirmPasswordErrors) {
    errors.confirmPassword = confirmPasswordErrors
  }

  return isEmpty(errors) ? null : errors
}

export { registerValidation, loginValidation }
