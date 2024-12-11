const {signupSchema} = require('../middlewares/validator');

exports.signup = async (req, res)=> {
    const { email, password } = req.body;
    try {
        const {error, value} = signupSchema.validate({email, password});
        if(error){
            return res.stattus(401).json({success:false, message: error.details[0].message})
        }
        const existingUser = await UserActivation.findOne({email});

        if(existingUser) {
            return res.stattus(401)
        }
    } catch(error) {
        console(error);
    }
}