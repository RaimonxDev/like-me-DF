import { postModel, createPostModel, updateLikePostModel, deletePostModel } from "../model/posts.model.js";

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
    const { titulo, url, descripcion } = req.body;

    const newPost = await createPostModel(titulo, url, descripcion);
    return res.status(200).json(newPost);
  } catch (error) { 
    return res.status(500).json({ message: error.message });
   }
};


export const updateLikePost = async (req, res) => {

  try {

    const { id } = req.params;
    if (!id) return res.status(400).json({ message: 'id is required' })
    const updateLikePost = await updateLikePostModel(id);

    console.log(updateLikePost)

    return res.status(200).json(updateLikePost);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }


}

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: 'id is required' })
    const deletePost = await deletePostModel(id);
    return res.status(200).json(deletePost);

  } catch (error) {
    return res.status(500).json({ message: error.message });

  }
}
