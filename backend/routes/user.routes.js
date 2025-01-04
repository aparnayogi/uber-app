const express = require('express');
const router = express.Router();
const { body } = require("express-validator")
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    userController.registerUser
)

// /**
//  * @route POST /users/login
//  * @description Authenticate user and get token
//  * @body {object} request
//  * @body {string} request.email - User's email
//  * @body {string} request.password - User's password (min 6 characters)
//  * @returns {object} 200 - Success response with token and user data
//  * @returns {object} 400 - Validation errors
//  * @returns {object} 401 - Invalid credentials
//  */
router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    userController.loginUser
)
router.get('/profile', authMiddleware.authUser, userController.getUserProfile)
router.get('/logout', authMiddleware.authUser, userController.logoutUser)

module.exports = router;