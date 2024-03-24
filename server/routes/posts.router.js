import { Router } from 'express';
import { posts, createPosts, updateLikePost, deletePost } from '../controllers/post.controller.js';

const router = Router();

router.get('/', posts)
router.post('/', createPosts)
router.put('/like/:id', updateLikePost)
router.delete('/:id', deletePost)

export default router;