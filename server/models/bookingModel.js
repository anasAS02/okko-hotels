const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    roomCity: {
        type: String,
        required: true
    },
    numberOfAdults: {
        type: String,
        required: true
    },
    checkInDate: {
        type: String,
        required: true
    },
    checkOutDate: {
        type: String,
        required: true
    },
    numberOfDays: {
        type: Number,
        required: true
    },
    bookingAmount: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
