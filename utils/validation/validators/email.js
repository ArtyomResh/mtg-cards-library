export default () => value =>
  value.match(/^.+@.+\..+$/)
    ? null
    : 'Invalid email format'
