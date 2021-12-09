/** @format */

import { Router } from "express";

const router = Router();

router.post("/sign-up",signUpUser)
router.post("/log-in",loginUser)

