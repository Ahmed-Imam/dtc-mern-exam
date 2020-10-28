const jwt = require('jsonwebtoken')
const secretkey = require('../utils')

// A middleware to check user token still valid
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        
        const decode = jwt.verify(token, `${secretkey}`)
        req.userData = decode

        next();

    } catch(error) {
        return res.status(401).json({
            message: 'Invalid token'
        })
    }    
}