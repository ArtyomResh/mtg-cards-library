const User = require('../../../models/User').default

module.exports = (req, res) => {
  const { userId } = req.params

  User
    .findById(userId)
    .then(user => {
      if (!user) {
        res.status(400).send('requested user do not exists')
      }

      return user.decks
    })
    .then(decks => res.json(decks))
    .catch(err => res.status(404).json({ message: err }))
}
