const mongoose = require('mongoose')

const { Schema, model } = mongoose
const DeckSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  cards: String,
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports.default = model('Deck', DeckSchema)
module.exports.schema = DeckSchema
