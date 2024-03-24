import { pool } from '../db/config.js';

export const postModel = async () => { 
  try { 
    const posts = await pool.query('SELECT id , titulo, img, likes, descripcion FROM POSTS')
    return posts.rows;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const createPostModel = async (titulo, url, descripcion) => {
  const img = url;
  try { 
    const newPost = await pool.query('INSERT INTO POSTS (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *', [titulo, img, descripcion])
    return newPost.rows;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const updateLikePostModel = async (id) => {
  try {
    //update like post +1
    const updateLikePost = await pool.query('UPDATE POSTS SET likes = COALESCE(likes, 0) + 1 where ID = $1 RETURNING * ', [id])
    console.log(updateLikePost.rows)
    return updateLikePost.rows;

  } catch (error) {
    throw new Error(error.message);

  }
}

export const deletePostModel = async (id) => {
  try {
    const deletePost = await pool.query('DELETE FROM POSTS WHERE id = $1 RETURNING *', [id])
    return deletePost.rows;
  } catch (error) {
    throw new Error(error.message);
  }

}  