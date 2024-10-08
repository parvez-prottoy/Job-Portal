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
 * @access Candidate
 */
router.get("/:jobId", getJobById);
/**
 * @route GET /api/v1/jobs
 * @access Candidate
 */
router.get("/", getJobsByKeyword);
/**
 * @route GET /api/v1/jobs
 * @access Candidate
 */
router.get("/", getJobs);
/**
 * @route POST /api/v1/jobs
 * @access Employer
 */
router.post("/", authentication, postJob);

export default router;
