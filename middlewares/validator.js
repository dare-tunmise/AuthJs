const Joi = require('joi');

exports.signupSchema = Joi.object({
    email: Joi.string().min(6).max(60).required.email({
        tlds: { allow:['com', 'net']}
    }),
    paswword: Joi.string().required().pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'))
})