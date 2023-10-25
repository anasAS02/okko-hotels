const express = require('express');
const router = express.Router();
const bookingControllers = require('../controllers/bookingControllers');

router.route('/booking')
        .post(bookingControllers.bookRoom);

router.route('/myBookings')
        .post(bookingControllers.getMyBookings);

router.route('/clientId')
        .get(bookingControllers.getClientId);

module.exports = router;