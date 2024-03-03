import { pool } from '../db/config.js';

export const postModel = async () => { 
  try { 
    const posts = await pool.query('SELECT id , titulo, img, descripcion FROM POSTS')
    return posts.rows;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const createPostModel = async (titulo, img, descripcion) => { 
  try { 
    const newPost = await pool.query('INSERT INTO POSTS (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *', [titulo, img, descripcion])
    return newPost.rows;
  } catch (error) {
    throw new Error(error.message);
  }
}
