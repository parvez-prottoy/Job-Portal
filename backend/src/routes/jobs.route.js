import express from "express";
import authentication from "../middlewares/authentication.middleware.js";
import {
  getJobById,
  getJobs,
  getJobsByKeyword,
  postJob,
} from "../controllers/jobs.controller.js";

const router = express.Router();
/**
 * @route GET /api/v1/jobs/:jobId
 * @access public
 */
router.get("/:jobId", getJobById);
/**
 * @route GET /api/v1/jobs
 * @access public
 */
router.get("/", getJobsByKeyword);
/**
 * @route GET /api/v1/jobs
 * @access public
 */
router.get("/", getJobs);
/**
 * @route POST /api/v1/jobs
 * @access public
 */
router.post("/", authentication, postJob);

export default router;
