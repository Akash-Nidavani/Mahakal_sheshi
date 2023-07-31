// controllers/UserController.js
// const {Author} = require("../models/index");
const db = require("./../models");

const createAuthor = async(req, res) => {
    console.log(req.body)
  try {
    const { firstName, lastName, email, phoneNumber, bio } = req.body;
    const author = await db.author.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      bio,
    });
    res.status(200).json(author);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error });
  }
};

const getAllAuthors = async (req, res) => {
  try {
    const authors = await db.author.findAll(); // {include:['blog']} -->Joining Author for All blogs of same Author
    res.json(authors);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch authors" });
  }
};

const deleteAuthor = async (req, res) => {
  try {
    const author = await db.author.findByPk(req.params.id);
    if (!author) {
      return res.status(404).json({ error: "Author not found" });
    }
    await author.destroy();
    res.json({ message: "Author deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the author" });
  }
};

module.exports = {
  createAuthor,
  getAllAuthors,
  deleteAuthor,
};
