const bcrypt = require('bcryptjs')
const User = require('../../../models/User').default
const validateUser = require('../../../utils/validation/user')

module.exports = (req, res) => {
  const { email, password } = req.body
  const validationErrors = validateUser.loginValidation({ email, password })

  if (validationErrors) {
    return res.status(400).send({ message: 'Invalid values', values: validationErrors, status: 400 })
  }

  User
    .findOne({ email })
    .then(user => {
      if (!user) {
        throw res.status(400).send({ message: 'User with provided email do not exists', status: 400 })
      }

      const isPasswordValid = bcrypt.compareSync(password, user.password)

      if (!isPasswordValid) {
        res.status(400).send({ message: 'Incorrect password', status: 400 })
      }

      const salt = bcrypt.genSaltSync(10)
      const hashedUserId = bcrypt.hashSync(user._id.toString(), salt)

      res
        .cookie(
          'mtg_library_user_sid',
          hashedUserId,
          {
            maxAge: 60 * 60 * 24 * 30,
            path: '/',
          },
        )
        .send({ message: 'Logged in' })
    })
}
