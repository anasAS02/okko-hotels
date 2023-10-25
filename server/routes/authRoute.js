const express = require('express');
const router = express.Router();
const authConrollers = require('../controllers/authControllers');

router.route('/register')
        .post(authConrollers.register);

router.route('/login')
        .post(authConrollers.login);


module.exports = router;