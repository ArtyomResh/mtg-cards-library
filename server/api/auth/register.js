const bcrypt = require('bcryptjs')
const User = require('../../../models/User').default
const validateUser = require('../../../utils/validation/user')

module.exports = (req, res) => {
  const { name, email, password } = req.body
  const { error: validationError } = validateUser.registerValidation({ name, email, password })

  if (validationError) {
    return res.status(400).send(validationError.details[0].message)
  }

  User
    .findOne({ name })
    .then(user => {
      if (user) {
        res.status(400).send('user with same name is already exists')
      }
    })

  User
    .findOne({ email })
    .then(user => {
      if (user) {
        res.status(400).send('user with same email is already exists')
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
