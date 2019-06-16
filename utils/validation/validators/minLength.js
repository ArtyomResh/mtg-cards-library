export default minLength => value =>
  value && value.length < minLength
    ? `The quantity of characters should be minimum ${minLength}`
    : null
