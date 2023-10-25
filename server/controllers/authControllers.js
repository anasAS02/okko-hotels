const User = require('../models/userModel');
const httpStatusText = require('../utils/httpStatusText');
const appError = require('../utils/appError');
const asyncWrapper = require('../middlewares/asyncWrapper');
const generateJWT = require('../utils/generateJWT');
const bcrypt = require('bcryptjs');

const register = asyncWrapper(
    async(req, res, next) => {
        const {firstName, lastName, password, email, country, role} = req.body;

        if(!firstName || !lastName || !password || !email || !country){
            const error = appError.create('All fields are required', 401, httpStatusText.ERROR);
            return next(error);
        }

        if(password.length < 8) {
            const error = appError.create('Password should be at least 8 characters', 401, httpStatusText.ERROR);
            return next(error);
        }

        const existingUser = await User.findOne({email});

        if(existingUser){
            const error = appError.create('Choose another email or password', 401, httpStatusText.ERROR);
            return next(error);
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstName,
            lastName,
            password: hashedPassword,
            email,
            country,
            role
        })

        const token = await generateJWT({email, role});
        newUser.token = token;

        await newUser.save();
        res.status(201).json({status: httpStatusText.SUCCESS, data: {token, role, firstName, email}});
    }
)

const login = asyncWrapper(
    async(req, res, next) => {
        const {email, password} = req.body;

        if(!email || !password){
            const error = appError.create('All fields are required', 401, httpStatusText.ERROR);
            return next(error);
        }

        const user = await User.findOne({email});

        if(!user){
            const error = appError.create('something is wrong', 401, httpStatusText.ERROR);
            return next(error);
        }

        const matchPassword = await bcrypt.compare(password, user.password);

        if(user && matchPassword){
            const firstName = user.firstName;
            const email = user.email;
            const role = user.role;
            const token = await generateJWT({email, role});
            user.token = token;
            res.status(200).json({status: httpStatusText.SUCCESS, data: {token, role, firstName, email}});
        }
    }
)

module.exports = {
    register,
    login,
}