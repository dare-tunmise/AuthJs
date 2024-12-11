const Joi = require('joi');

exports.signupSchema = Joi.object({
    email: Joi.string().min(6).max(60).required.email
})