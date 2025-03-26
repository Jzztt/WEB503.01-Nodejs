import RegisterSchema from "../Schemas/AuthSchema.js";

const register = (req, res) => {
  const {error} = RegisterSchema.validate(req.body,{
    abortEarly : false
  })
  const errors = error.details.map((detail) => detail.message);
  if (error) {
    return res.status(400).json({
      success: false,
      message: errors,
    });
  }

};

const login = async (req, res) => {
  res.send("Login Page");
};

export const authController = {
  register,
  login
};
