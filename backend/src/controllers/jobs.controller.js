import JobModel from "../models/job.model.js";

/**
 * @route GET /api/v1/jobs
 * @description get jobs by keyword
 * @access public
 */
export const getJobsByKeyword = async (req, res) => {
  try {
    const keyword = req.query.keyword;
    console.log(keyword);
    const query = {
      $or: [
        {
          title: { $regex: keyword, $options: "i" },
        },
        {
          type: { $regex: keyword, $options: "i" },
        },
      ],
    };
    const jobs = await JobModel.find(query);
    if (jobs < 0) {
      return res.status(404).json({ success: false, message: "No job found!" });
    }
    res.status(200).json({
      success: true,
      data: jobs,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error?.message,
    });
  }
};
/**
 * @route GET /api/v1/jobs
 * @description get all jobs
 * @access public
 */
export const getJobs = async (_req, res) => {
  try {
    const jobs = await JobModel.find();
    if (jobs < 0) {
      return res.status(404).json({ success: false, message: "No job found!" });
    }

    res.status(200).json({
      success: true,
      data: jobs,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error?.message,
    });
  }
};
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
