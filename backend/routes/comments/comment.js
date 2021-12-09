/** @format */

import { CommentModel } from "@monorepo/schema";
import { sendErrorResponse, sendSuccessResponse } from "../../helper/common";
import mongoose from "mongoose";

export const createComment = async (req, res) => {
  try {
    const data = await CommentModel.create({
      content: req.body.content,
      blog: mongoose.Types.ObjectId(req.body.blogId),
      user: mongoose.Types.ObjectId(req.userId),
    });
    sendSuccessResponse(res, data);
  } catch (error) {
    console.log("Blog Error ", error);
    sendErrorResponse(res, error);
  }
};

export const getAllComments = async (req, res) => {
  try {
    const data = await CommentModel.find({
      blog: mongoose.Types.ObjectId(req.params.id),
    })
      .sort({ created_at: -1 })
      .populate("user");
    sendSuccessResponse(res, data);
  } catch (error) {
    console.log("Blog Error ", error);
    sendErrorResponse(res, error);
  }
};

export const updateComment = async (req, res) => {
  try {
    const getId = req.params.id;
    const data = await CommentModel.findOne({ _id: getId });
    const decodedUser = req.userId;
    if (String(data.user) !== decodedUser) {
      sendErrorResponse(res, "Cannot Update");
      return;
    }
    await CommentModel.updateOne(
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

export const deleteComment = async (req, res) => {
  try {
    const getId = req.params.id;
    const data = await CommentModel.findOne({ _id: getId });
    const decodedUser = req.userId;
    if (String(data.user) !== decodedUser) {
      sendErrorResponse(res, "Cannot Update");
      return;
    }
    await CommentModel.deleteOne({ _id: getId });
    sendSuccessResponse(res, "Deleted");
  } catch (error) {
    console.log("Blog Error ", error);
    sendErrorResponse(res, error);
  }
};
