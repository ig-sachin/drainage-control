import express from 'express';
import { login, createUser } from '../controllers/users.js';
// this file will contain all the routes realted to posts
const router = express.Router();

// it will reach to localhost:5000/posts/
// because we have added a middleware in index.js

// this will get me all the posts
router.post('/login', login);

// this will add post in database
router.post('/register', createUser);

export default router;