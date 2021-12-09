/** @format */

import { Router } from "express";

const indexRouter = Router();

indexRouter.use("/users", userRoutes);

export default indexRouter;
