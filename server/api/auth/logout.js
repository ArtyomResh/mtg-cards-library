module.exports = (req, res) => {
  res
    .send('logged out')
    .clearCookie('user_sid')
    .redirect('/')
}
