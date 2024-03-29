const Booking = require('../models/bookingModel');
const httpStatusText = require('../utils/httpStatusText');
const appError = require('../utils/appError');
const asyncWrapper = require('../middlewares/asyncWrapper');

const getAllBookings = asyncWrapper(
    async(req, res) => {
        const bookings = await Booking.find();
        res.status(200).json({status: httpStatusText.SUCCESS, data: bookings});
    }
)

const bookRoom = asyncWrapper(
    async(req, res, next) => {
        const { firstName, email, roomCity, numberOfAdults, checkInDate, checkOutDate, numberOfDays, bookingAmount } = req.body;

        if(!firstName || !email || !roomCity || !numberOfAdults || !checkInDate || !checkOutDate || !numberOfDays || !bookingAmount){
            const error = appError.create('Invalid data', 401, httpStatusText.ERROR);
            return next(error);
        }

        const booking = new Booking({
            firstName,
            email,
            roomCity,
            numberOfAdults,
            checkInDate,
            checkOutDate,
            numberOfDays,
            bookingAmount
        })

        await booking.save();
        res.status(200).json({status: httpStatusText.SUCCESS, data: booking});
    }
)

const getMyBookings = asyncWrapper(
    async(req, res) => {
        const email = req.body.email;
        const bookings = await Booking.find({email: email});
        res.status(200).json({status: httpStatusText.SUCCESS, data: bookings})
    }
)

const getClientId = asyncWrapper(
    async(req, res) => {
        const clientId = process.env.PAYPAL_CLIENT_ID;
        res.status(200).json({status: httpStatusText.SUCCESS, data: clientId});
    }
)

module.exports = {
    getAllBookings,
    bookRoom,
    getMyBookings,
    getClientId,
};