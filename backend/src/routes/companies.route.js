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
 * @access public
 */
router.patch("/:companyId", authentication, patchCompany);
/**
 * @route GET /api/v1/companies/:companyId
 * @access public
 */
router.get("/:companyId", authentication, getCompanyById);
/**
 * @route GET /api/v1/companies
 * @access public
 */
router.get("/", authentication, getCompanies);
/**
 * @route POST /api/v1/companies
 * @access public
 */
router.post("/", authentication, postCompany);

export default router;
