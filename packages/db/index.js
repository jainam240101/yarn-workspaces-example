/** @format */

import mongoose from "mongoose";

export const dbConnect = () => {
  mongoose
    .connect("mongodb+srv://root:jainam@cluster0.payen.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(() => {
      console.log("Database connection successful");
    })
    .catch((err) => {
      console.log("Database connection error", err);
    });
};
