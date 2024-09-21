import dotenv from "dotenv";
dotenv.config("../.env");
const dev = {
  port: process.env.PORT || 9090,
};
export default dev;
