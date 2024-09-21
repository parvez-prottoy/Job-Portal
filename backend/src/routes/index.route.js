import express, { Router } from "express";
import { getHealth, getHome } from "../controllers/index.controller.js";
const router = express.Router();

/**
 * @route GET /
 * @access public
 */
router.get("/", getHome);
/**
 * @route GET /health
 * @access public
 */
router.get("/health", getHealth);

export default router;
