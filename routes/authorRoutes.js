const express = require('express');
const router = express.Router();
const AuthorController = require('../controller/authorController');

router.post('/', AuthorController.createAuthor);
router.get('/', AuthorController.getAllAuthors);
router.delete('/:id', AuthorController.deleteAuthor);

module.exports = router;