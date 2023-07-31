const express = require('express');
const router = express.Router();
const BlogController = require('../controller/blogsController');

router.post('/', BlogController.createBlog);
router.get('/', BlogController.getAllBlogs);
router.delete('/:id', BlogController.deleteBlog);

module.exports = router;