import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";

/**
 * @route POST /api/v1/users/register
 * @description register new user
 * @access public
 */
export const postRegister = async (req, res) => {
  try {
    const { userName, email, password, role } = req.body || {};
    if (!userName || !email || !password || !role) {
      return res.status(400).json({
        success: false,
        error: "All input fields are required!",
      });
    }
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        error: "Already have and account!, Please login?",
      });
    }
    const hashPass = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({
      userName,
      email,
      password: hashPass,
      role,
    });
    res.status(201).json({
      success: true,
      message: "Create new user",
      date: newUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error?.message,
    });
  }
};
