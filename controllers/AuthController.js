import User from "../models/Usermodel.js";
import RegisterSchema from "../Schemas/AuthSchema.js";
import bcrypt from "bcryptjs";

const register = async (req, res) => {
  const { error } = RegisterSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).json({
      success: false,
      message: errors,
    });
  }
  const isEmail = await User.findOne({ email: req.body.email });
  if (isEmail) {
    return res.status(400).json({
      success: false,
      message: "Email already exists",
    });
  }

  const salt = 10;
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  const user = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: hashPassword,
    role: req.body.role ? req.body.role : "user",
  })
  return res.status(200).json({
    success: true,
    data: user,
    message: "User created successfully",
  });




};

const login = async (req, res) => {
  res.send("Login Page");
};

export const authController = {
  register,
  login,
};
