import CompanyModel from "../models/company.model.js";

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
