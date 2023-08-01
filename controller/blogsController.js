const db = require("./../models");

const createBlog = async (req, res) => {
  try {
    const { title, category, tags, short_description, content, authorId } = req.body;
    if(!req.file){
        return res.status(400).json({error:"Blog picture needs to be uploaded"})
    }
    const image = req.file ? req.file.path : null;
    const blog = await db.blog.create({
        title,
        category,
        tags,
        short_description,
        content,
        authorId,
        image
    });
    res.status(200).json(blog);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Failed to create a Blog" });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blog = await db.blog.findAll(); // {include:['blogs_author']} --> for joining Respecting author data
    res.json(blog);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await db.blog.findByPk(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    await blog.destroy();
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the blog" });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  deleteBlog,
};
