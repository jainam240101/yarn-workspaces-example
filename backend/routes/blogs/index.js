/** @format */

import { createBlog, deleteBlog, getAllBlogs, updateBlog } from "./blogs";

const { Router } = require("express");

const blogRouter = Router();

blogRouter.post("/", createBlog);
blogRouter.get("/", getAllBlogs);
blogRouter.put("/:id", updateBlog);
blogRouter.delete("/:id", deleteBlog);

export default blogRouter;
