const bcrypt = require('bcryptjs')

module.exports = (req, res, next) => {
  const { userId } = req.params
  const { mtg_library_user_sid } = req.cookies

  if (!mtg_library_user_sid) {
    return res.status(403).send('access denied')
  }

  const isSessionCookieValid = bcrypt.compareSync(userId, mtg_library_user_sid)

  if (!isSessionCookieValid) {
    return res.status(403).send('access denied')
  }

  next()
}
