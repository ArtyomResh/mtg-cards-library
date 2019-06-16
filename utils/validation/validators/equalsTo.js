export default valueToCheckWith => value =>
  value === valueToCheckWith
    ? null
    : 'Not equal'
