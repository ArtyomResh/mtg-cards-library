const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const deckRouter = require('./decks')
const userRouter = require('./users')
const authRouter = require('./auth')

require('dotenv').config()

const app = express()
const DB_MESSAGE = `
==================================

CONNECTED TO DB

==================================
`
const SERVER_MESSAGE = `
==================================

Server hosted on port 3030!

==================================
`

mongoose.connect(
  process.env.MONGODB_CONNECTION_URL,
  { useNewUrlParser: true },
  () => console.log('\x1b[33m', DB_MESSAGE, '\x1b[0m'),
)

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/decks', deckRouter)
app.use('/users', userRouter)
app.use('/auth', authRouter)

app.listen(
  3030,
  'localhost',
  () => console.log('\x1b[33m', SERVER_MESSAGE, '\x1b[0m'),
)
