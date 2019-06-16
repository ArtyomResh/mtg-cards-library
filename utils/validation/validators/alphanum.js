export default () => value =>
  value.match(/^[a-zA-Z0-9]+$/)
    ? null
    : 'Invalid format, use only numbers and latin letters'
