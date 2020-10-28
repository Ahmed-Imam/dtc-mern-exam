const express = require ('express');
const router = express.Router()

// User Model 
const AuthController = require('../../controllers/AuthController')


// @route Post api/getUsers
// @desc Add new user 
router.post('/register', AuthController.registerAccount);

router.post('/login', AuthController.login);
router.get('/getAccounts', AuthController.getAccounts);

module.exports = router;