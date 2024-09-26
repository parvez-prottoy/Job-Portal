import CompanyModel from "../models/company.model.js";

/**
 * @route GET /api/v1/companies/:companyId
 * @description get company by company id
 * @access public
 */
export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.companyId;
    const company = await CompanyModel.findById(companyId);
    if (!company) {
      return res.status(404).json({
        success: false,
        error: "No company found!",
      });
    }
    res.status(200).json({
      success: true,
      data: company,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error?.message,
    });
  }
};
/**
 * @route GET /api/v1/companies
 * @description get companies by userId
 * @access public
 */
export const getCompanies = async (req, res) => {
  try {
    const userId = req.id;
    console.log(userId);
    const companies = await CompanyModel.find({ userId });
    if (!companies) {
      return res
        .status(404)
        .json({ success: false, message: "No company found!" });
    }
    res.status(200).json({
      success: true,
      data: companies,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error?.message,
    });
  }
};
/**
 * @route POST /api/v1/companies
 * @description create new company
 * @access public
 */
export const postCompany = async (req, res) => {
  try {
    const { name, founded, email, location, website, logo } = req.body;
    if (!name || !location || !logo) {
      return res.status(400).json({
        success: false,
        error: "Company name, location and logo are required!",
      });
    }
    const company = await CompanyModel.findOne({ name });
    if (company) {
      return res.status(400).json({
        success: false,
        error: "Company already exists!",
      });
    }
    console.log(req.id);
    const newCompany = await CompanyModel.create({
      name,
      founded,
      email,
      location,
      website,
      logo,
      userId: req.id,
    });
    res.status(201).json({
      success: true,
      message: "Created company successfully 🙂",
      data: newCompany, // return the created company
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error?.message,
    });
  }
};
