const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(express.json());
app.use(cors());

const mongoose = require('mongoose');

const url = process.env.MONGO_URL;

const httpStatusText = require('./utils/httpStatusText');
const authRoute = require('./routes/authRoute')
const roomsRoute = require('./routes/roomsRoute')
const bookingRoute = require('./routes/bookingRoute')

mongoose.connect(url).then(() => {
    console.log('mongodb server is connected')
})

app.use('/okko/rooms', roomsRoute);
app.use('/okko/auth', authRoute);
app.use('/okko/', bookingRoute);

app.all('*', (req, res) => {
    res.status(404).json({status: 'Error', message: 'this resource is not available'});
})

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({status: err.statusText || httpStatusText.ERROR, message: err.message, code: err.statusCode || 500, data: null});
});

app.listen(process.env.PORT || 4000, () => {
    console.log('running now on 4000')
});

