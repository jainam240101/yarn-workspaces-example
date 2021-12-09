/** @format */

import express from "express";
import cors from "cors";
import indexRouter from "./routes";

const app = express();
app.use(cors());

app.use("/api", indexRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Backent on port ${port}`);
});
