import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      enum: ["candidate", "employer"],
      require: true,
    },
    profile: {
      bio: {
        type: String,
      },
      location: {
        type: String,
      },
      skills: [
        {
          type: String,
        },
      ],
      resumeUrl: {
        type: String,
      },
      resumeName: {
        type: String,
      },
      company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
      },
      photo: {
        type: String,
        default: "",
      },
    },
  },
  { timestamps: true, versionKey: false }
);
const UserModel = mongoose.model("users", userSchema);
export default UserModel;
