import express from "express";
import authentication from "../middlewares/authentication.middleware.js";
import { postJob } from "../controllers/jobs.controller.js";

const router = express.Router();
/**
 * @route POST /api/v1/jobs
 * @access public
 */
router.post("/", authentication, postJob);

export default router;
