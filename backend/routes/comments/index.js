/** @format */

import { createComment, deleteComment, getAllComments, updateComment } from "./comment";

const { Router } = require("express");

const commentRouter = Router();

commentRouter.post("/", createComment);
commentRouter.get("/:id", getAllComments);
commentRouter.put("/:id", updateComment);
commentRouter.delete("/:id", deleteComment);

export default commentRouter;
