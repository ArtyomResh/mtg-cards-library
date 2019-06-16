const bcrypt = require('bcryptjs')

module.exports = (req, res) => {
  const { userId } = req.params
  const isSessionCookieValid = bcrypt.compareSync(userId, req.cookies.mtg_library_user_sid)

  if (!isSessionCookieValid) {
    return res.status(403).send('access denied')
  }
}
