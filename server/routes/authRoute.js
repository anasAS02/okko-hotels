const express = require('express');
const router = express.Router();
const authConrollers = require('../controllers/authControllers');
const verifyToken = require('../middlewares/verifyToken');
const allowedTo = require('../middlewares/allowedTo');
const userRoles = require('../utils/userRoles');

router.route('/register')
        .post(authConrollers.register);

router.route('/login')
        .post(authConrollers.login);

router.route('/addUser')
        .post(verifyToken, allowedTo(userRoles.ADMIN), authConrollers.addUser);

router.route('/deleteUser')
        .post(verifyToken, allowedTo(userRoles.ADMIN), authConrollers.deleteAdmin);

router.route('/users')
        .get(verifyToken, allowedTo(userRoles.ADMIN), authConrollers.getAllUsers);


module.exports = router;