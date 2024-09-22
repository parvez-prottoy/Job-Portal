import express, { Router } from "express";
import { getLogin, postRegister } from "../controllers/users.controller.js";
const router = express.Router();

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
