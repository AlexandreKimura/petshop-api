import mongoose from "mongoose";

const Comment = new mongoose.Schema(
  {
    name: String,
    content: String,
  },
  { collection: "posts" }
);

export default Comment;
