const Deck = require('../../../models/Deck').default

module.exports = (req, res) => {
  const { title, description, cards } = req.body
  const deck = new Deck({
    title,
    description,
    cards,
  })

  deck
    .save()
    .then(data => res.json(data))
    .catch(err => res.status(403).json({ message: err }))
}
