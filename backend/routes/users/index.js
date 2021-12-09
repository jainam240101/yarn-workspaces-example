/** @format */

import { Router } from "express";
import { createUser, Login } from "./users";

const userRouter = Router();

userRouter.post("/sign-up", createUser);
userRouter.post("/log-in", Login);

export default userRouter