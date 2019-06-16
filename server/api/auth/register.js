const bcrypt = require('bcryptjs')
const User = require('../../../models/User').default
const validateUser = require('../../../utils/validation/user')

module.exports = (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  const validationErrors = validateUser.registerValidation({ name, email, password, confirmPassword })

  if (validationErrors) {
    return res.status(400).send({ message: 'Invalid values', values: validationErrors, status: 400 })
  }

  User
    .findOne({ name })
    .then(user => {
      if (user) {
        res.status(400).send({ message: 'User with same name is already exists', status: 400 })
      }
    })

  User
    .findOne({ email })
    .then(user => {
      if (user) {
        res.status(400).send({ message: 'User with same email is already exists', status: 400 })
      }
    })

  const salt = bcrypt.genSaltSync(10)
  const hashedPassword = bcrypt.hashSync(password, salt)

  const user = new User({
    name,
    email,
    password: hashedPassword,
  })

  user
    .save()
    .then(({ _id }) => res.json({ _id }))
    .catch(err => res.json({ message: err }))
}
