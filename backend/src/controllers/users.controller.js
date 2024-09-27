import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dev from "../../config/config.js";

/**
 * @route PATCH /api/v1/users/update-profile
 * @description update user profile data
 * @access Candidate & Employer
 */
export const patchProfile = async (req, res) => {
  try {
    const { userName, bio, location, skills, resumeUrl, resumeName, photo } =
      req.body || {};
    let skillsArr;
    if (skills) {
      skillsArr = skills.split(","); // split the string into an array
    }
    const userId = req.id;
    let user = await UserModel.findById(userId);
    if (!user) {
      return res.status(400).json({
        success: false,
        error: "User not found!",
      });
    }
    // note: update user data
    user.userName = userName ? userName : user.userName;
    user.profile.bio = bio ? bio : user.profile.bio;
    user.profile.location = location ? location : user.profile.location;
    user.profile.skills = skills ? skillsArr : user.profile.skills;
    user.profile.resumeUrl = resumeUrl ? resumeUrl : user.profile.resumeUrl;
    user.profile.resumeName = resumeName ? resumeName : user.profile.resumeName;
    user.profile.resumeName = resumeName ? resumeName : user.profile.resumeName;
    user.profile.photo = photo ? photo : user.profile.photo;
    await user.save();
    res.status(200).json({
      success: true,
      message: "Profile update successfully 🙂",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error?.message,
    });
  }
};
/**
 * @route GET /api/v1/users/logout
 * @description logout user
 * @access Candidate & Employer
 */
export const getLogout = async (_req, res) => {
  try {
    res.status(200).cookie("token", "", { maxAge: 0 }).json({
      success: true,
      message: "Logout successfully 🙂",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error?.message,
    });
  }
};
/**
 * @route GET /api/v1/users/login
 * @description login user
 * @access Candidate & Employer
 */
export const getLogin = async (req, res) => {
  try {
    const { email, password, role } = req.body || {};
    // note: validation inputs data
    if (!email || !password || !role) {
      return res.status(400).json({
        success: false,
        error: "All fields are required!",
      });
    }
    const user = await UserModel.findOne({ email });
    // note: check user email
    if (!user) {
      return res.status(400).json({
        success: false,
        error: "Invalid email!",
      });
    }
    // note: check user password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        error: "Invalid password!",
      });
    }
    // note: check user role
    if (role !== user.role) {
      return res.status(400).json({
        success: false,
        error: "Invalid role!",
      });
    }
    // note: create user token
    const payload = {
      userId: user._id,
    };
    const token = await jwt.sign(payload, dev.tokenKey, { expiresIn: "1d" });
    res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: "strict",
      })
      .json({
        success: true,
        message: "Login successfully 🙂",
        data: user,
      });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error?.message,
    });
  }
};
/**
 * @route POST /api/v1/users/register
 * @description register new user
 * @access Candidate & Employer
 */
export const postRegister = async (req, res) => {
  try {
    const { userName, email, password, role } = req.body || {};
    // note: validation inputs data
    if (!userName || !email || !password || !role) {
      return res.status(400).json({
        success: false,
        error: "All input fields are required!",
      });
    }
    const user = await UserModel.findOne({ email });
    // note: check already have user
    if (user) {
      return res.status(400).json({
        success: false,
        error: "Already have and account!, Please login?",
      });
    }
    // note: hash password
    const hashPass = await bcrypt.hash(password, 10);
    // note: create new user
    const newUser = await UserModel.create({
      userName,
      email,
      password: hashPass,
      role,
    });
    res.status(201).json({
      success: true,
      message: "Create user successfully 🙂",
      date: newUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error?.message,
    });
  }
};
