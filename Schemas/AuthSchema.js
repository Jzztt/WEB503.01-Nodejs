import Joi from "joi";

const RegisterSchema = Joi.object({
    username: Joi.string().min(3).max(50).required({
        message : "Please enter your name"
    }),
    email: Joi.string().email().required({
        message : "Please enter your email"
    }),
    password: Joi.string().min(6).required({
        message : "Please enter your password"
    })
})

export default RegisterSchema;