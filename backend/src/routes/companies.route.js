import express from "express";
import {
  getCompanies,
  getCompanyById,
  patchCompany,
  postCompany,
} from "../controllers/companies.controller.js";
import authentication from "../middlewares/authentication.middleware.js";
const router = express.Router();

/**
 * @route PATCH /api/v1/companies/:companyId
 * @access Employer
 */
router.patch("/:companyId", authentication, patchCompany);
/**
 * @route GET /api/v1/companies/:companyId
 * @access Employer
 */
router.get("/:companyId", authentication, getCompanyById);
/**
 * @route GET /api/v1/companies
 * @access Employer
 */
router.get("/", authentication, getCompanies);
/**
 * @route POST /api/v1/companies
 * @access Employer
 */
router.post("/", authentication, postCompany);

export default router;
