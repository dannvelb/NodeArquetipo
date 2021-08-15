const { sign } = require('jsonwebtoken')
const { SECRETJWTSUDO } = require('../config')

module.exports.generateToken = (user) =>
    sign({ user }, SECRETJWTSUDO, { expiresIn: '5h' });