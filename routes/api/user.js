const express = require ('express');
const router = express.Router()
const auth = require('../../middleware/auth')
// User Model 
const UserController = require('../../controllers/UserController')

// @route GET api/getUsers
// @desc Get All Users
router.get('/getUsers/:page/:pageSize',auth, UserController.getUsers);

// @route Post api/getUsers
// @desc Add new user 
router.post('/addUser', UserController.addUser);

module.exports = router;