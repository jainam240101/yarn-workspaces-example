/** @format */

import { Router } from "express";
import blogRouter from "./blogs";
import userRouter from "./users";
import { validateUser } from "@monorepo/auth";
import commentRouter from "./comments";

const indexRouter = Router();

indexRouter.use("/users", userRouter);
indexRouter.use("/blogs", validateUser, blogRouter);
indexRouter.use("/comments", validateUser, commentRouter);

export default indexRouter;
