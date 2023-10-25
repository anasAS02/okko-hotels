const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    title: String,
    info: String,
    price: Number,
    imgOne: String,
    imgTwo: String,
    imgThree: String,
    imgFour: String,
    imgFive: String,
    imgSix: String,
    mapInfo: String,
    mapContact: String,
    mapPhone: String,
    mapMail: String,
    CityName: String,
    roomTitle: String,
    roomInfo: String,
    roomDetails: String,
})

module.exports = mongoose.model('Room', roomSchema);