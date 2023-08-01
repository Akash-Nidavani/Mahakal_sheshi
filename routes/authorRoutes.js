const express = require('express');
const router = express.Router();
const AuthorController = require('../controller/authorController');
const { validateAuthor }  = require("../middlewear/authorValidation")

router.post('/',validateAuthor, AuthorController.createAuthor);
router.get('/', AuthorController.getAllAuthors);
router.delete('/:id', AuthorController.deleteAuthor);

module.exports = router;