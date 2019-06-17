const User = require('../../../models/User').default

module.exports = (req, res) => {
  const { userId } = req.params

  User
    .findById(userId)
    .then(user => {
      if (!user) {
        res.status(400).send('Requested user do not exists')
      }

      return user
    })
    .then(user => res.json(user))
    .catch(err => res.status(404).json({ message: err }))
}
