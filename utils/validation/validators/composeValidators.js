export default (...validators) => value =>
  validators.reduce((error, validator) => error || (validator && validator(value)), null)
