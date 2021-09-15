import PostService from "../services/post.service.js";

async function createPost(req, res, next) {
  try {
    let post = req.body;

    if (!post.title || !post.content) {
      throw new Error("Title e Content são obrigatórios!");
    }

    post = await PostService.createPost(post);
    res.send(post);
  } catch (err) {
    next(err);
  }
}

async function getPosts(req, res, next) {
  try {
    res.send(await PostService.getPosts());
  } catch (err) {
    next(err);
  }
}

async function createComment(req, res, next) {
  try {
    let comment = req.body;

    if (!comment.postId || !comment.name || !comment.content) {
      throw new Error("Post Id, Name e Content são obrigatórios!");
    }

    comment = await PostService.createComment(comment);
    res.send(comment);
  } catch (err) {
    next(err);
  }
}

export default {
  createPost,
  getPosts,
  createComment,
};
