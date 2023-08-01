const express = require('express');
const router = express.Router();
const BlogController = require('../controller/blogsController');
const { validateBlog } = require('../middlewear/blogValidation')

router.post('/', validateBlog, BlogController.createBlog);
router.get('/', BlogController.getAllBlogs);
router.delete('/:id', BlogController.deleteBlog);

module.exports = router;