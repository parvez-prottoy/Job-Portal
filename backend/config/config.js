import dotenv from "dotenv";
dotenv.config("../.env");
const dev = {
  port: process.env.PORT || 9090,
  mongoURL: process.env.MONGO_URL || "mongodb://localhost:27017/Job-Portal",
  tokenKey: process.env.PRIVATE_KEY,
};
export default dev;
