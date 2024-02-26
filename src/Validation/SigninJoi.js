import Joi from "joi";


 const SigninSchema = Joi.object ({
    email: Joi.object().min(1).max(350).required(),
    password: Joi.object().min(1).max(800).required(),
});

export {SigninSchema}; 
