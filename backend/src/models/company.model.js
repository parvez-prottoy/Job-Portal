import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    founded: {
      type: String,
    },
    email: {
      type: String,
    },
    location: {
      type: String,
      require: true,
    },
    website: {
      type: String,
    },
    logo: {
      type: String,
      require: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      require: true,
    },
  },
  { timestamps: true, versionKey: false }
);
const CompanyModel = mongoose.model("companies", companySchema);
export default CompanyModel;
