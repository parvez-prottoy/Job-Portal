import JobModel from "../models/job.model.js";

/**
 * @route POST /api/v1/jobs
 * @description create new job
 * @access public
 */
export const postJob = async (req, res) => {
  try {
    const userId = req.id;
    const {
      title,
      description,
      jobLocation,
      salary,
      type,
      position,
      responsibilities,
      skillsExperience,
      skills,
      companyId,
    } = req.body;
    if (
      !title ||
      !description ||
      !jobLocation ||
      !salary ||
      !type ||
      !position ||
      !companyId
    ) {
      return res.status(400).json({
        success: false,
        error: "Inputs all required felids!",
      });
    }
    const newJob = {
      title,
      description,
      jobLocation,
      salary,
      type,
      position,
      company: companyId,
      createBy: userId,
      responsibilities,
      skillsExperience,
      skills,
    };
    const job = await JobModel.create(newJob);
    res.status(201).json({
      success: true,
      message: "Job create successfully 🙂",
      data: job,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error?.message,
    });
  }
};
