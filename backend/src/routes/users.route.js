import express, { Router } from "express";
import { postRegister } from "../controllers/users.controller.js";
const router = express.Router();

/**
 * @route POST /api/v1/users/register
 * @access public
 */
router.post("/register", postRegister);

export default router;
