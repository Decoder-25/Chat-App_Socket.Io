const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require('../config/generateToken');

const registerUser = asyncHandler( async(req, res) => {
    const { name, email, password, pic } = req.body;

    //Checking if any of these fields are epty or not
    if(!name || !email || !password){
        res.status(400);
        throw new Error("Please enter all the fields");
    }

    //finding the unique email-id if it is present in the database already or not
    const userExists = await User.findOne({ email });

    //if presents throw the error 400 bad request
    if(userExists) {
        res.status(400);
        throw new Error("user Already exists");
    }

    //if the email not present in the database create the new user in database
    const user = await User.create({
        name,
        email,
        password,
        pic,
    });

     if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id)
        })
        console.log("User created successfully")
     } else {
        res.status(400);
        throw new Error("Failed to create User");
     }

});

const authUser = asyncHandler (async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({ email });

    if(user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(401);
        throw new Error("Invalid email or Password");
    }
});

module.exports = { registerUser, authUser };