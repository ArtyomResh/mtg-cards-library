const Joi = require('@hapi/joi')

const name = Joi.string().alphanum().min(3).max(30).required()
const email = Joi.string().email({ minDomainSegments: 2 }).required()
const password = Joi.string().regex(/^[a-zA-Z0-9]{6,1024}$/).required()

const registerValidation = user => {
  const schema = Joi.object().keys({
    name,
    email,
    password,
  })

  return Joi.validate(user, schema)
}

const loginValidation = user => {
  const schema = Joi.object().keys({
    email,
    password,
  })

  return Joi.validate(user, schema)
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation
