import express from "express";
import { postCompany } from "../controllers/companies.controller.js";
import authentication from "../middlewares/authentication.middleware.js";
const router = express.Router();

/**
 * @route POST /api/v1/companies
 * @access public
 */
router.post("/", authentication, postCompany);

export default router;
