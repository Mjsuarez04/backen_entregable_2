const express = require('express');
const userController = require('../controllers/users.controller');
const router = express.Router();

router.post('/signup', userController.signup);
router.post('/login', userController.login);

module.exports = router;
