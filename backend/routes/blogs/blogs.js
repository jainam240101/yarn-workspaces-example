/** @format */

import { BlogModel } from "@monorepo/schema";
import { sendErrorResponse, sendSuccessResponse } from "../../helper/common";
import mongoose from "mongoose";

export const createBlog = async (req, res) => {
  try {
    console.log("UserID ", req.userId);
    const data = await BlogModel.create({
      name: req.body.name,
      description: req.body.description,
      content: req.body.content,
      user: mongoose.Types.ObjectId(req.userId),
    });
    sendSuccessResponse(res, data);
  } catch (error) {
    console.log("Blog Error ", error);
    sendErrorResponse(res, error);
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const data = await BlogModel.find({}).sort({ created_at: -1 });
    sendSuccessResponse(res, data);
  } catch (error) {
    console.log("Blog Error ", error);
    sendErrorResponse(res, error);
  }
};

export const updateBlog = async (req, res) => {
  try {
    const getId = req.params.id;
    const data = await BlogModel.findOne({ _id: getId });
    const decodedUser = req.userId;
    console.log("Decoded User ", decodedUser);
    console.log("Blog User ", String(data.user));
    if (String(data.user) !== decodedUser) {
      sendErrorResponse(res, "Cannot Update");
      return;
    }
    await BlogModel.updateOne(
      { _id: getId },
      {
        content: req.body.content,
      }
    );
    sendSuccessResponse(res, "Updated");
  } catch (error) {
    console.log("Blog Error ", error);
    sendErrorResponse(res, error);
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const getId = req.params.id;
    const data = await BlogModel.findOne({ _id: getId });
    const decodedUser = req.userId;
    if (String(data.user) !== decodedUser) {
      sendErrorResponse(res, "Cannot Update");
      return;
    }
    await BlogModel.deleteOne({ _id: getId });
    sendSuccessResponse(res, "Deleted");
  } catch (error) {
    console.log("Blog Error ", error);
    sendErrorResponse(res, error);
  }
};
