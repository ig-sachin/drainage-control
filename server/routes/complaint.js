import express from 'express';
import { submitComplaint, getComplain } from '../controllers/complaint.js';
;
// this file will contain all the routes realted to posts
const router = express.Router();

// it will reach to localhost:5000/posts/
// because we have added a middleware in index.js

// this will get me all the posts
router.post('/submit-complaint', submitComplaint);

router.get('/get-complain', getComplain);


export default router;