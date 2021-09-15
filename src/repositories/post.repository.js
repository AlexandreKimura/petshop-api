import PostSchema from "../schemas/posts.schema.js";
import { connect } from "./mongo.db.js";

async function createPost(post) {
  try {
    const mongoose = await connect();
    const Post = mongoose.model("Post", PostSchema);
    post = new Post(post);
    await post.save();
  } catch (err) {
    throw err;
  }
}

async function getPosts() {
  try {
    const mongoose = await connect();
    const Post = mongoose.model("Post", PostSchema);
    const query = Post.find({});
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

async function createComment(comment) {
  try {
    const mongoose = await connect();
    const Post = mongoose.model("Post", PostSchema);

    const query = Post.findOne({ id: comment.id });
    const post = await query.exec();

    post.comments.push({
      name: comment.name,
      content: comment.content,
    });

    await Post.findOneAndUpdate(
      {
        id: comment.id,
      },
      post
    );
  } catch (err) {
    throw err;
  }
}

export default {
  createPost,
  getPosts,
  createComment,
};
