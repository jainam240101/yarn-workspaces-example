/** @format */

import { UserModel } from "@monorepo/schema";
import bcrypt from "bcrypt";
import { sendErrorResponse, sendSuccessResponse } from "../../helper/common";

export const createUser = async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const data = await UserModel.create({
      name: req.body.name,
      email: req.body.email,
      designation: req.body.designation,
      password: hashPassword,
    });
    sendSuccessResponse(res, data);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
