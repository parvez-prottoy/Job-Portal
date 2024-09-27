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
 * @access Candidate & Employer
 */
router.patch("/update-profile", authentication, patchProfile);
/**
 * @route GET /api/v1/users/logout
 * @access Candidate & Employer
 */
router.get("/logout", getLogout);
/**
 * @route GET /api/v1/users/login
 * @access Candidate & Employer
 */
router.get("/login", getLogin);
/**
 * @route POST /api/v1/users/register
 * @access Candidate & Employer
 */
router.post("/register", postRegister);

export default router;
