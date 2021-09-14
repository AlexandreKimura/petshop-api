import mongoose from "mongoose";
import Comment from "./comment.schema.js";

const Post = new mongoose.Schema(
  {
    title: String,
    content: String,
    comments: [Comment],
  },
  {
    collection: "posts",
  }
);

export default Post;
