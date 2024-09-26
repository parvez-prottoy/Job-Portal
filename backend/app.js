import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import { notFoundHandler, errorHandler } from "./src/utils/error.js";
import indexRoute from "./src/routes/index.route.js";
import usersRoute from "./src/routes/users.route.js";
import companiesRoute from "./src/routes/companies.route.js";
import jobsRoute from "./src/routes/jobs.route.js";

const app = express();
// note: connect mongoDB
connectDB.apply();
// note: used middlewares
app.use([
  morgan("dev"),
  cors(),
  cookieParser(),
  express.json(),
  express.urlencoded({ extended: true }),
]);
// note: used routes
app.use("/", indexRoute);
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/companies", companiesRoute);
app.use("/api/v1/jobs", jobsRoute);
// note: error handler
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
