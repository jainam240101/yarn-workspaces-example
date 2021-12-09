/** @format */

import mongoose from "mongoose";

export const dbConnect = () => {
  mongoose
    .connect("mongodb://mongodb:27017/workspace")
    .then(() => {
      console.log("Database connection successful");
    })
    .catch((err) => {
      console.log("Database connection error", err);
    });
};
