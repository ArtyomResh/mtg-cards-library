const mongoose = require('mongoose')

const { Schema, model } = mongoose
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 30,
  },
  email: {
    type: String,
    required: true,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  decks: [{
    type: Schema.Types.ObjectId,
    ref: 'Deck',
  }],
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports.default = model('User', UserSchema)
module.exports.schema = UserSchema
