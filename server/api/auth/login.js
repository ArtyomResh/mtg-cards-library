const bcrypt = require('bcryptjs')
const User = require('../../../models/User').default
const validateUser = require('../../../utils/validation/user')

module.exports = (req, res) => {
  const { email, password } = req.body
  const { error: validationError } = validateUser.loginValidation({ email, password })

  if (validationError) {
    return res.status(400).send(validationError.details[0].message)
  }

  User
    .findOne({ email })
    .then(user => {
      if (!user) {
        res.status(400).send('user with provided email do not exists')
      }

      const isPasswordValid = bcrypt.compareSync(password, user.password)

      if (!isPasswordValid) {
        res.status(400).send('incorrect password')
      }

      const salt = bcrypt.genSaltSync(10)
      const hashedUserId = bcrypt.hashSync(user._id.toString(), salt)

      res
        .cookie(
          'user_sid',
          hashedUserId,
          {
            maxAge: 60 * 60 * 24 * 30,
            httpOnly: true,
            path: '/',
          },
        )
        .send('logged in')
    })
}
