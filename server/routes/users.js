const express = require('express')
const getUserDecks = require('../api/users/get-user-decks')
const verifyUserSid = require('../middlewares/verifyUserSid')

const router = express.Router()

router.get('/:userId/decks', verifyUserSid, getUserDecks)

module.exports = router
