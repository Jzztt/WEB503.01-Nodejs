import User from "../models/Usermodel.js";
import { AuthSchema } from "../Schemas/AuthSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  const { error } = AuthSchema.RegisterSchema.validate(req.body, {
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
  });
  return res.status(200).json({
    success: true,
    data: user,
    message: "User created successfully",
  });
};

const login = async (req, res) => {
  console.log(req.body);

  // Kiem tra thong tin dang nhap
  const { error } = AuthSchema.LoginSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).json({
      success: false,
      message: errors,
    });
  }
  // Tìm tên tài khoản người dụng theo email
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).json({
      success: false,
      message: "User not found",
    });
  }

  // Kiem tra mat khau
  const isPassword = await bcrypt.compare(req.body.password, user.password);
  if (!isPassword) {
    return res.status(400).json({
      success: false,
      message: "Password  is incorrect",
    });
  }


  // secret key cần bảo mật nên để ở .env
  const secretKey = "my-secret-key";
  const token = jwt.sign({ _id: user._id, username: user.username, role: user.role }, secretKey, {
    expiresIn: "1d",
  });

  return res.status(200).json({
    success: true,
    message: "Login successfully",
    data: {
      email: user.email,
      token: token
    }
  })
};

export const authController = {
  register,
  login,
};
