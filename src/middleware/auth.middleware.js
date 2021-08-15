const jwt = require('jsonwebtoken')
const { SECRETJWT } = require('../config')

module.exports = function (req, res, next) {
    const token = req?.headers?.authorization?.replace('Bearer ','');
    if (!token) {
        const error = new Error();
        error.message = "Token must be";
        error.status = 410;
        throw error;
    }
    jwt.verify(token, SECRETJWT , function (err, decodedToken) {
        if (err) {
            const error = new Error();
            error.message = "invalid token";
            error.status = 415;
            throw error;
        }
        req.user = decodedToken.user;
        next();
    })
}