import express from "express";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/db.js";

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

export default app;
