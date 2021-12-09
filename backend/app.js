/** @format */

import express from "express";
import cors from "cors";
import indexRouter from "./routes";
import { dbConnect } from "@monorepo/db";
const logger = require("morgan");

const app = express();

dbConnect();

app.use(cors());
app.use(express.json());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use("/api", indexRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Backent on port ${port}`);
});
