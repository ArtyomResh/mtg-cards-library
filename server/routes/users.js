const express = require('express')
const getUserDecks = require('../api/users/get-user-decks')
const getUser = require('../api/users/get-user')
const verifyUserSid = require('../middleware/verifyUserSid')

const router = express.Router()

router.get('/:userId', verifyUserSid, getUser)
router.get('/:userId/decks', verifyUserSid, getUserDecks)

module.exports = router
