/** @format */

import { Router } from "express";
import blogRouter from "./blogs";
import userRouter from "./users";
import { validateUser } from "@monorepo/auth";

const indexRouter = Router();

indexRouter.use("/users", userRouter);
indexRouter.use("/blogs", validateUser, blogRouter);

export default indexRouter;
