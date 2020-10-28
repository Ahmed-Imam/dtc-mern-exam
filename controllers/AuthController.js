const { response } = require('express')
const Auth = require('../models/Auth')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secretkey = require('../utils')
const registerAccount = (req, res, next) => {
    let { name, password, } = req.body
    bcrypt.hash(password, 8, function (err, hashedPass) {
        if (err) {
            res.json({
                error: err
            })
        }
        let accountToAdd = new Auth({
            name: name,
            password: hashedPass
        })
        accountToAdd.save()
            .then(user => {
                res.json({
                    message: 'User Added successfully',
                    statusCode: 200
                })
            })
            .catch(error => {
                res.json({
                    message: 'An error Occured ' + error
                })
            })
    })
}

const login = (req, res, next) => {
    const { username, password } = req.body
    Auth.findOne({ $or: [{ name: username }, { phone: username }] })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, function(err, result){
                    if(err){
                        res.json({
                            error: err
                        })
                    }
                    if(result){
                        const token = jwt.sign({
                            userId: user._id
                        }
                        ,`${secretkey}`, // add jwt key
                        {
                            expiresIn: "1h" // token will expre within an hour
                        })
                        res.json({
                            message: 'Login successfully',
                            token: token,
                            statusCode: 200
                        })
                    }else {
                        res.json({
                            message: 'Check your username or password',
                            statusCode: 401
    
                        })
                    }
                })
            } else {
                res.json({
                    message:'No User found',
                    statusCode: 401
                })
            }
        })
}
const getAccounts = (req, res, next) => {
    Auth.find()
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'An error Occured' + error
            })
        })
}

module.exports = {
    registerAccount,
    login,
    getAccounts
}