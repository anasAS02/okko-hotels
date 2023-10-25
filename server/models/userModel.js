const mongoose = require('mongoose');
const userRoles = require('../utils/userRoles');

const isGmail = function(email) {
    return /\b[A-Z0-9._%+-]+@gmail\.com\b/i.test(email);
};

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: isGmail,
            message: 'Email must be a valid Gmail address'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    country: {
        type: String,
        required: true
    },
    token: {
        type: String
    },
    role: {
        type: String,
        enum: [userRoles.USER, userRoles.ADMIN],
        default: userRoles.USER
    }
})

module.exports = mongoose.model('User', userSchema);