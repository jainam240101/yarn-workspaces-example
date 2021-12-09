/** @format */

import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      ref: "User",
      type: mongoose.Types.ObjectId,
      required: true,
    },
    blog: {
      ref: "Blogs",
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const CommentModel = mongoose.model("Comments", commentSchema);
export { CommentModel };
