import { postModel, createPostModel } from "../model/posts.model.js";

export const posts = async (_, res) => {
  try {
    const likes = await postModel();
    return res.status(200).json(likes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createPosts = async (req, res) => {
  try {
    const { titulo, img, descripcion } = req.body;
    const newPost = await createPostModel(titulo, img, descripcion);
    return res.status(200).json(newPost);
  } catch (error) { 
    return res.status(500).json({ message: error.message });
   }
};