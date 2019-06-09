const express = require('express')
const register = require('../api/auth/register')
const login = require('../api/auth/login')
const logout = require('../api/auth/logout')

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)

module.exports = router
