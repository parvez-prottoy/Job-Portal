import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  jobLocation: {
    type: String,
    require: true,
  },
  salary: {
    type: Number,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  position: {
    type: Number,
    require: true,
  },
  responsibilities: [
    {
      type: String,
    },
  ],
  skillsExperience: [
    {
      type: String,
    },
  ],
  skills: [
    {
      type: String,
    },
  ],
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "companies",
    require: true,
  },
  createBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    require: true,
  },
  applications: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "applications",
    },
  ],
});
const JobModel = mongoose.model("jobs", jobSchema);
export default JobModel;
