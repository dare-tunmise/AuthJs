// const { required, types } = require('joi');
// const { verify } = require('jsonwebtoken');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required!'],
        trim: true,
        unique: [true, "Email must be unique!"],
        minLength: [5, "Email must have 5 characters!"],
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "Password must be provided!"],
        trim: true,
        select: false,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    verificationCode:{
        type: String,
        select: false,
    },
    verificationCodeValidation:{
        type: String,
        select: false,
    },
    forgotPasswordCode:{
        type: String,
        select: false,

    },
    forgotPasswordCodeValidation:{
        type: Number,
        select: false,
    }

}, {
    timestamps: true
});

// model.exports = mongoose.model('User', userSchema);
const User = mongoose.model('User', userSchema);
module.exports = User;

// const Book = mongoose.model('Book', bookSchema);
// module.exports = Book;