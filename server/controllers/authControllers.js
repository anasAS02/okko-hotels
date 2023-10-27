const User = require('../models/userModel');
const httpStatusText = require('../utils/httpStatusText');
const appError = require('../utils/appError');
const asyncWrapper = require('../middlewares/asyncWrapper');
const generateJWT = require('../utils/generateJWT');
const bcrypt = require('bcryptjs');
const userRoles = require('../utils/userRoles');

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

        if(!matchPassword){
            const error = appError.create('something is wrong', 401, httpStatusText.ERROR);
            return next(error);
        }

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

const getAllUsers = asyncWrapper(
    async(req, res) => {
        const users = await User.find({role: "USER"});
        const admins = await User.find({role: "ADMIN"});

        res.status(200).json({status: httpStatusText.SUCCESS, data: {users, admins}});
    }
)

const addUser = asyncWrapper(
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
        
        const users = await User.find({role: "USER"});
        const admins = await User.find({role: "ADMIN"});
        res.status(201).json({status: httpStatusText.SUCCESS, data:{users, admins}});
    }
)

const deleteAdmin = asyncWrapper(
    async(req, res, next) => {
        const email = req.body.email;
        const findedEmail = await User.findOne({email: email});
        
        if(!email){
            const error = appError.create('Email is required.', 401, httpStatusText.ERROR);
            return next(error);
        }else if(!findedEmail){
            const error = appError.create('This user in not found', 404, httpStatusText.ERROR);
            return next(error);
        }
        else if(findedEmail.role == userRoles.USER){
            const error = appError.create('You cannot delete this user', 401, httpStatusText.FAIL);
            return next(error);
        }else{
            await User.deleteOne({email: email});

            const users = await User.find({role: "USER"});
            const admins = await User.find({role: "ADMIN"});
            res.status(200).json({status: httpStatusText.SUCCESS, data: {users, admins}});
        }
    }
)


module.exports = {
    register,
    login,
    getAllUsers,
    addUser,
    deleteAdmin
}