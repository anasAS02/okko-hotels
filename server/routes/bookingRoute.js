const express = require('express');
const router = express.Router();
const bookingControllers = require('../controllers/bookingControllers');
const verifyToken = require('../middlewares/verifyToken');
const allowedTo = require('../middlewares/allowedTo');
const usersRoles = require('../utils/userRoles');

router.route('/')
        .get(verifyToken, allowedTo(usersRoles.ADMIN), bookingControllers.getAllBookings);

router.route('/booking')
        .post(verifyToken, bookingControllers.bookRoom);

router.route('/myBookings')
        .post(verifyToken, bookingControllers.getMyBookings);

router.route('/clientId')
        .get(bookingControllers.getClientId);

module.exports = router;