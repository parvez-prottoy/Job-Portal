import express from "express";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/db.js";
import { notFoundHandler, errorHandler } from "./src/utils/error.js";
import indexRoute from "./src/routes/index.route.js";

const app = express();
// note: connect mongoDB
connectDB.apply();
// note: used middlewares
app.use([
  morgan("dev"),
  cors(),
  express.json(),
  express.urlencoded({ extended: true }),
]);
// note: used routes
app.use("/", indexRoute);
// note: error handler
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
