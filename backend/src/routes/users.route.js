import express, { Router } from "express";
import {
  getLogin,
  getLogout,
  patchProfile,
  postRegister,
} from "../controllers/users.controller.js";
const router = express.Router();
import authentication from "../middlewares/authentication.middleware.js";

/**
 * @route PATCH /api/v1/users/update-profile
 * @access public
 */
router.patch("/update-profile", authentication, patchProfile);
/**
 * @route GET /api/v1/users/login
 * @access public
 */
/**
 * @route GET /api/v1/users/logout
 * @access public
 */
router.get("/logout", getLogout);
/**
 * @route GET /api/v1/users/login
 * @access public
 */
router.get("/login", getLogin);
/**
 * @route POST /api/v1/users/register
 * @access public
 */
router.post("/register", postRegister);

export default router;
