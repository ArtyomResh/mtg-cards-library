const Deck = require('../../../models/Deck').default

module.exports = (req, res) => {
  Deck
    .find()
    .then(decks => res.json(decks))
    .catch(err => res.status(404).json({ message: err }))
}
