export default maxLength => value =>
  value && value.length > maxLength
    ? `The quantity of characters should not exceed ${maxLength}`
    : null
