import mongoose from "mongoose";
import colors from "colors";
import dev from "./config.js";
// note: connect mongoDB
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(dev.mongoURL);
    console.log(
      colors.bgMagenta(`MongoDB Connected: ${connect.connection.host}`)
    );
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
