import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    jod: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "jobs",
      require: true,
    },
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      require: true,
    },
    states: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true, versionKey: false }
);
const ApplicationModel = mongoose.model("applications", applicationSchema);
export default ApplicationModel;
