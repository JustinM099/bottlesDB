const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

//desc: register new user
//route: POST api/users
//access: public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('all fields required')
    }

    //check for prexisting user by email
    const existingUser = await User.findOne({ email })

    if (existingUser) {
        res.status(400)
        throw new Error('email already registered')
    }

    //pword hash
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    
    //create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('invalid data')
    }
})

//desc: authenticate user
//route: POST api/users/login
//access: public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    //find user by email
    const user = await User.findOne({ email })
    
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('invalid user')
    }
})

//desc: get user data
//route: GET api/users/me
//access: private
const getMe = asyncHandler(async (req, res) => {

    res.status(200).json(req.user)
})

//generate jwt -- this is called in loginUser and creates a token in the response that can be verified by the authMiddleware. authMiddleware is put into the wineRoutes.
//if its not verified, the authMiddleware prevents requests from going through.
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}


module.exports = {
    registerUser,
    loginUser,
    getMe
}