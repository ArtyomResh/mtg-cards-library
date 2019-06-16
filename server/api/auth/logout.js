module.exports = (req, res) => {
  res
    .send('logged out')
    .clearCookie('mtg_library_user_sid')
    .redirect('/')
}
