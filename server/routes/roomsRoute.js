const express = require('express');
const router = express.Router();
const roomControllers = require('../controllers/roomsControllers');

router.route('/')
        .get(roomControllers.getAllRooms);

router.route('/:CityName')
        .get(roomControllers.getRoom);

router.route('/search')
        .post(roomControllers.searchRoom);

module.exports = router;