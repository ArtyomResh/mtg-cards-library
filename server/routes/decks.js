const express = require('express')
const createDeck = require('../api/decks/create-deck')
const getDecks = require('../api/decks/get-decks')

const router = express.Router()

router.get('/', getDecks)
router.post('/', createDeck)

module.exports = router
