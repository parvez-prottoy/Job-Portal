import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();
// note: used middlewares
app.use([
  morgan("dev"),
  cors(),
  express.json(),
  express.urlencoded({ extended: true }),
]);

export default app;
