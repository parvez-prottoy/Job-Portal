import express from "express";
import {
  getCompanies,
  getCompanyById,
  postCompany,
} from "../controllers/companies.controller.js";
import authentication from "../middlewares/authentication.middleware.js";
const router = express.Router();

/**
 * @route GET /api/v1/companies/:companyId
 * @access public
 */
router.get("/:companyId", getCompanyById);
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
