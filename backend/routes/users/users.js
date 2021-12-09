/** @format */

import { createToken } from "@monorepo/auth";
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
    console.log("Error ", error);
    sendErrorResponse(res, error);
  }
};

export const Login = async (req, res) => {
  try {
    const email = await UserModel.findOne({ email: req.body.email });
    if (email) {
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        email.password
      );
      if (passwordMatch) {
        const token = await createToken(email._id);
        sendSuccessResponse(res, { token: token });
      } else {
        sendErrorResponse(res, "Incorrect Credentials");
      }
    } else {
      sendErrorResponse(res, "Incorrect Credentials");
    }
  } catch (error) {
    console.log("Error ", error);
    sendErrorResponse(res, error);
  }
};
