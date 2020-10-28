const { response } = require('express')
const User = require('../models/User')
const getUsers = async (req, res, next) => {
    const { page = 1, pageSize = 10 } = req.params;
    const count = await User.countDocuments();
    User.find()
    .limit(pageSize * 1)
    .skip((page - 1) * pageSize)
    .exec()
        .then(response => {
            res.json({
                data:response,
                totalPages: Math.ceil(count / pageSize),
                currentPage: page,
                statusCode: 200
            })
        })
        .catch(error => {
            res.json({
                message: 'An error Occured' + error
            })
        })
}

const addUser = (req, res, next) => {
    let { name, email, age, phone } = req.body
    let userToAdd = new User({
        name: name,
        email: email,
        age: age,
        phone: phone
    })
    userToAdd.save()
        .then(response => {
            res.json({
                message: 'User Added successfully',
                statusCode: 200
            })
        })
        .catch(error => {
            res.json({
                message: 'An error Occured' + error
            })
        })
}

const updateUser = (req, res, next) => {
    let { userId, name, email, age, phone } = req.body
    let updatedData = {
        name: name,
        email: email,
        age: age,
        phone: phone
    }
    User.findByIdAndUpdate(userId, { $set: updatedData })
        .then(() => {
            res.json({
                message: 'User updated successfully',
                statusCode: 200
            })
        })
        .catch(error => {
            res.json({
                message: 'An error Occured' + error
            })
        })
}

module.exports = {
    getUsers,
    updateUser,
    addUser
}