const Room = require('../models/roomModel');
const httpStatusText = require('../utils/httpStatusText');
const appError = require('../utils/appError');
const asyncWrapper = require('../middlewares/asyncWrapper');

const getAllRooms = asyncWrapper(
    async(req, res) => {
        const rooms = await Room.find();
        res.status(200).json({status: httpStatusText.SUCCESS, data: rooms});
    }
)

const getRoom = asyncWrapper(
    async(req, res) => {
        const CityName = req.params.CityName;
        const room = await Room.find({CityName: CityName});
        res.status(200).json({status: httpStatusText.SUCCESS, data: room});
    }
)

const searchRoom = asyncWrapper(
    async(req, res, next) => {
        const query = req.query;
        const keyword = query.keyword;
        const regex = new RegExp(keyword, 'i');

        if(!keyword){
            const error = appError.create('keyword is required', 401, httpStatusText.FAIL);
            return next(error)
        }

        const result = await Room.find({$or: [{title: {$regex: regex}}, {CityName: {$regex: regex}}]});

        if(result.length < 1){
            const error = appError.create('Sorry, no matching results found for your search', 404, httpStatusText.FAIL);
            return next(error)
        }

        res.status(200).json({status: httpStatusText.SUCCESS, data: result})
    }
)

module.exports = {
    getAllRooms,
    getRoom,
    searchRoom
}