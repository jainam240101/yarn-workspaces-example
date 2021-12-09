/** @format */

import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    user: {
      ref: "User",
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

const BlogModel = mongoose.model("Blogs", BlogSchema);
export { BlogModel };
