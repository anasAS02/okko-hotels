const appError = require('../utils/appError');
const httpStatusText = require('../utils/httpStatusText');
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['Authorization'] || req.headers['authorization'];
    
    if(!authHeader){
        const error = appError.create('Token is required', 401, httpStatusText.ERROR);
        return next(error);
    }

    const token = authHeader.split(' ')[1];
    
    try{
        const currentUser = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.currentUser = currentUser;
        next();
    }catch(err){
        const error = appError.create('Invalid code', 401, httpStatusText.ERROR);
        next(error);
    }
}

module.exports = verifyToken;