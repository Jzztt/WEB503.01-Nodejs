const register = (req, res) => {
  res.send("Register Page");
};

const login = async (req, res) => {
  res.send("Login Page");
};

export const authController = {
  register,
  login
};
